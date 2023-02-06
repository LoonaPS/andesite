import WebSocket from "ws";
import { EventEmitter } from "stream";
import * as Gateway from "../lib/GatewayProtocolBuffers";

const {
	InitializeConnectionReq, InitializeConnectionRsp, PingTransactionType,
	ServiceHeartBeatNotify, ServicePingAckReq, ServicePingAckRsp, ServiceType
} = Gateway;

type GatewayQuery = keyof Omit<typeof Gateway, "Account" | "DbGateOpcodes" | "OperationalData" |
	"PingTransaction" | "PingTransactionType" | "Player" | "PlayerBirthday" | "Session" | "ServiceType">;

export interface GatewayOptions {
	/** The host for the database gateway. */
	host: string;
	/** The port for the database gateway. */
	port: number;
	/** The authentication key for the database gateway. */
	authentication: string;
	/** If the database gateway uses SSL. */
	secure: boolean;
}

export class DatabaseGateway {
	/**
	 * The WebSocket class used for the database gateway.
	 */
	public ws: WebSocket;

	/**
	 * The ping calculated from server induced heartbeat.
	 * @readonly
	 */
	public ping: number = 0;

	/**
	 * The options used for the database gateway.
	 * @readonly
	 */
	public readonly options: GatewayOptions;

	/**
	 * The event stream for packets received.
	 */
	public readonly eventStream: GatewayEventStream = new GatewayEventStream();

	public constructor(options: GatewayOptions) {
		this.options = options;
	}

	public connect() {
		this.ws = new WebSocket(`${this.options.secure ? 'wss://' : 'ws://'}${this.options.host}${this.options.secure ? 443 : this.options.port}`, {
			headers: { Authorization: this.options.authentication }
		});

		this.ws.on('open', this.onOpen.bind(this));
		this.ws.on('message', this.onMessage.bind(this));
	}

	private onMessage(data: WebSocket.RawData, isNonce: boolean) {
		let pkt: { query?: GatewayQuery; data?: string; } = {};

		try {
			pkt = JSON.parse(data.toString());
		} catch (e) {
			return;
		}

		switch (pkt.query) {
			case "ServicePingAckRsp":
				this.onPingSucc(Buffer.from(pkt.data, "base64"));
				break;
			case "ServiceHeartBeatNotify":
				this.onHeartBeat(Buffer.from(pkt.data, "base64"));
				break;

			default:
				this.eventStream.emit(pkt.query, Buffer.from(pkt.data, "base64"));
				break;
		}
	}

	private onOpen() {
		this.ws.send(JSON.stringify({
			query: "InitializeConnectionReq",
			data: Buffer.from(InitializeConnectionReq.toBinary({
				serviceType: ServiceType.GATE, dbgateClientTime: BigInt(Date.now())
			})).toString("base64")
		}));
	}

	private onHeartBeat(data: Buffer) {
		const heartbeatNotify = ServiceHeartBeatNotify.fromBinary(data);
		const heartbeatAckPacket = ServicePingAckReq.create({
			transaction: {
				creationTime: heartbeatNotify.transaction.creationTime,
				acknowledgeTime: BigInt(Date.now()),
				isTransactionAcked: true
			},
			transactionType: heartbeatNotify.transactionType
		});

		this.ws.send(JSON.stringify({
			query: "ServicePingAckReq",
			data: Buffer.from(ServicePingAckReq.toBinary(heartbeatAckPacket)).toString("base64")
		}));
	}

	private onPingSucc(data: Buffer) {
		const heartbeatRsp = ServicePingAckRsp.fromBinary(data);
		this.ping = heartbeatRsp.acknowledgeMs;
	}
}

interface GatewayEventStream {
	/**
	 * Adds the `listener` function to the end of the listeners array for the
	 * event named `eventName`. No checks are made to see if the `listener` has
	 * already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
	 * times.
	 *
	 * Returns a reference to the `EventEmitter`, so that calls can be chained.
	 *
	 * By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
	 * event listener to the beginning of the listeners array.
	 *
	 * @since v0.1.101
	 * @param eventName The name of the event.
	 * @param listener The callback function
	 */
	on(eventName: GatewayQuery | symbol, listener: (data: Buffer) => void): this;

	/**
       * Synchronously calls each of the listeners registered for the event named `eventName`,
	 * in the order they were registered, passing the supplied arguments to each.
       *
       * Returns `true` if the event had listeners, `false` otherwise.
     	 */
	emit(eventName: GatewayQuery | symbol, ...args: any[]): boolean;

	/**
	 * Adds a **one-time** `listener` function for the event named `eventName`. The
	 * next time `eventName` is triggered, this listener is removed and then invoked.
	 *
	 * Returns a reference to the `EventEmitter`, so that calls can be chained.
	 *
	 * By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
	 * event listener to the beginning of the listeners array.
	 *
	 * @since v0.3.0
	 * @param eventName The name of the event.
	 * @param listener The callback function
	 */
	once(eventName: GatewayQuery, listener: (data: Buffer) => void): this;

	/**
	 * Removes the specified `listener` from the listener array for the event named`eventName`.
	 *
	 * `removeListener()` will remove, at most, one instance of a listener from the
	 * listener array. If any single listener has been added multiple times to the
	 * listener array for the specified `eventName`, then `removeListener()` must be
	 * called multiple times to remove each instance.
	 *
	 * Once an event is emitted, all listeners attached to it at the
	 * time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
	 * will not remove them from`emit()` in progress. Subsequent events behave as expected.
	 *
	 *
	 * Because listeners are managed using an internal array, calling this will
	 * change the position indices of any listener registered _after_ the listener
	 * being removed. This will not impact the order in which listeners are called,
	 * but it means that any copies of the listener array as returned by
	 * the `emitter.listeners()` method will need to be recreated.
	 *
	 * When a single function has been added as a handler multiple times for a single
	 * event (as in the example below), `removeListener()` will remove the most
	 * recently added instance. In the example the `once('ping')`listener is removed:
	 *
	 *
	 * Returns a reference to the `EventEmitter`, so that calls can be chained.
	 * @since v0.1.26
	 */
	removeListener(eventName: GatewayQuery | symbol, listener: (...args: any[]) => void): this;

	/**
	 * Removes all listeners, or those of the specified `eventName`.
	 *
	 * It is bad practice to remove listeners added elsewhere in the code,
	 * particularly when the `EventEmitter` instance was created by some other
	 * component or module (e.g. sockets or file streams).
	 *
	 * Returns a reference to the `EventEmitter`, so that calls can be chained.
	 * @since v0.1.26
	 */
	removeAllListeners(event?: GatewayQuery | symbol): this;
}

class GatewayEventStream extends EventEmitter {
	constructor() {
		super();
	}
}