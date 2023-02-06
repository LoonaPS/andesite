"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseGateway = void 0;
const ws_1 = __importDefault(require("ws"));
const stream_1 = require("stream");
const Gateway = __importStar(require("../lib/GatewayProtocolBuffers"));
const { InitializeConnectionReq, InitializeConnectionRsp, PingTransactionType, ServiceHeartBeatNotify, ServicePingAckReq, ServicePingAckRsp, ServiceType } = Gateway;
class DatabaseGateway {
    constructor(options) {
        /**
         * The ping calculated from server induced heartbeat.
         * @readonly
         */
        this.ping = 0;
        /**
         * The event stream for packets received.
         */
        this.eventStream = new GatewayEventStream();
        this.options = options;
    }
    connect() {
        this.ws = new ws_1.default(`${this.options.secure ? 'wss://' : 'ws://'}${this.options.host}${this.options.secure ? 443 : this.options.port}`, {
            headers: { Authorization: this.options.authentication }
        });
        this.ws.on('open', this.onOpen.bind(this));
        this.ws.on('message', this.onMessage.bind(this));
    }
    onMessage(data, isNonce) {
        let pkt = {};
        try {
            pkt = JSON.parse(data.toString());
        }
        catch (e) {
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
    onOpen() {
        this.ws.send(JSON.stringify({
            query: "InitializeConnectionReq",
            data: Buffer.from(InitializeConnectionReq.toBinary({
                serviceType: ServiceType.GATE, dbgateClientTime: BigInt(Date.now())
            })).toString("base64")
        }));
    }
    onHeartBeat(data) {
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
    onPingSucc(data) {
        const heartbeatRsp = ServicePingAckRsp.fromBinary(data);
        this.ping = heartbeatRsp.acknowledgeMs;
    }
}
exports.DatabaseGateway = DatabaseGateway;
class GatewayEventStream extends stream_1.EventEmitter {
    constructor() {
        super();
    }
}
//# sourceMappingURL=index.js.map