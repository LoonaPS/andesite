"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationalData = exports.ServiceBasicInfo = exports.PingTransaction = exports.PlayerBirthday = exports.PlayerProfilePicture = exports.Session = exports.Account = exports.Player = exports.CommandExceptionNotify = exports.UpdateAvatarDataCollectionRsp = exports.UpdateAvatarDataCollectionReq = exports.GetPlayerAvatarCollectionRsp = exports.GetPlayerAvatarCollectionReq = exports.UpdatePlayerMailCollectionRsp = exports.UpdatePlayerMailCollectionReq = exports.GetPlayerMailCollectionRsp = exports.GetPlayerMailCollectionReq = exports.UpdatePlayerDataRsp = exports.UpdatePlayerDataReq = exports.GetPlayerDataRsp = exports.GetPlayerDataReq = exports.UpdateAccountDataRsp = exports.UpdateAccountDataReq = exports.GetAccountDataRsp = exports.GetAccountDataReq = exports.UpdateSessionDataRsp = exports.UpdateSessionDataReq = exports.GetSessionDataRsp = exports.GetSessionDataReq = exports.ServiceHeartBeatNotify = exports.ServicePingAckRsp = exports.ServicePingAckReq = exports.InitializeConnectionRsp = exports.InitializeConnectionReq = exports.GetDbGateOperationalDataRsp = exports.GetDbGateOperationalDataReq = exports.DbGateOpcodes = exports.ServiceType = exports.PingTransactionType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum com.yonakaps.package.PingTransactionType
 */
var PingTransactionType;
(function (PingTransactionType) {
    /**
     * @generated from protobuf enum value: FIRST_TRANSACTION = 0;
     */
    PingTransactionType[PingTransactionType["FIRST_TRANSACTION"] = 0] = "FIRST_TRANSACTION";
    /**
     * @generated from protobuf enum value: TRANSACTION_SUCC = 2;
     */
    PingTransactionType[PingTransactionType["TRANSACTION_SUCC"] = 2] = "TRANSACTION_SUCC";
    /**
     * @generated from protobuf enum value: IS_ALIVE = 1;
     */
    PingTransactionType[PingTransactionType["IS_ALIVE"] = 1] = "IS_ALIVE";
})(PingTransactionType = exports.PingTransactionType || (exports.PingTransactionType = {}));
/**
 * @generated from protobuf enum com.yonakaps.package.ServiceType
 */
var ServiceType;
(function (ServiceType) {
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_NONE = 0;
     */
    ServiceType[ServiceType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_CLIENT = 1;
     */
    ServiceType[ServiceType["CLIENT"] = 1] = "CLIENT";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_GATE = 2;
     */
    ServiceType[ServiceType["GATE"] = 2] = "GATE";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_GAME = 3;
     */
    ServiceType[ServiceType["GAME"] = 3] = "GAME";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_NODE = 4;
     */
    ServiceType[ServiceType["NODE"] = 4] = "NODE";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_DB = 5;
     */
    ServiceType[ServiceType["DB"] = 5] = "DB";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_SNS = 6;
     */
    ServiceType[ServiceType["SNS"] = 6] = "SNS";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_DISPATCH = 7;
     */
    ServiceType[ServiceType["DISPATCH"] = 7] = "DISPATCH";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_MUIP = 8;
     */
    ServiceType[ServiceType["MUIP"] = 8] = "MUIP";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_OFFLINE_MSG = 9;
     */
    ServiceType[ServiceType["OFFLINE_MSG"] = 9] = "OFFLINE_MSG";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_MAIL = 10;
     */
    ServiceType[ServiceType["MAIL"] = 10] = "MAIL";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_MP = 11;
     */
    ServiceType[ServiceType["MP"] = 11] = "MP";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_HTTPPROXY = 12;
     */
    ServiceType[ServiceType["HTTPPROXY"] = 12] = "HTTPPROXY";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_ACTIVITY = 13;
     */
    ServiceType[ServiceType["ACTIVITY"] = 13] = "ACTIVITY";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_PATHFINDING = 14;
     */
    ServiceType[ServiceType["PATHFINDING"] = 14] = "PATHFINDING";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_SOCIAL = 15;
     */
    ServiceType[ServiceType["SOCIAL"] = 15] = "SOCIAL";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_OA = 16;
     */
    ServiceType[ServiceType["OA"] = 16] = "OA";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_MATCH = 17;
     */
    ServiceType[ServiceType["MATCH"] = 17] = "MATCH";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_OFFLINE_OP = 18;
     */
    ServiceType[ServiceType["OFFLINE_OP"] = 18] = "OFFLINE_OP";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_TOTHEMOON = 19;
     */
    ServiceType[ServiceType["TOTHEMOON"] = 19] = "TOTHEMOON";
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_GCG = 20;
     */
    ServiceType[ServiceType["GCG"] = 20] = "GCG";
})(ServiceType = exports.ServiceType || (exports.ServiceType = {}));
/**
 * @generated from protobuf enum com.yonakaps.package.DbGateOpcodes
 */
var DbGateOpcodes;
(function (DbGateOpcodes) {
    /**
     * @generated from protobuf enum value: OP_SUCC = 0;
     */
    DbGateOpcodes[DbGateOpcodes["OP_SUCC"] = 0] = "OP_SUCC";
    /**
     * @generated from protobuf enum value: OP_FAIL = -1;
     */
    DbGateOpcodes[DbGateOpcodes["OP_FAIL"] = -1] = "OP_FAIL";
    /**
     * @generated from protobuf enum value: OP_SVR_ERROR = 1;
     */
    DbGateOpcodes[DbGateOpcodes["OP_SVR_ERROR"] = 1] = "OP_SVR_ERROR";
    /**
     * @generated from protobuf enum value: OP_UNKNOWN_ERROR = 2;
     */
    DbGateOpcodes[DbGateOpcodes["OP_UNKNOWN_ERROR"] = 2] = "OP_UNKNOWN_ERROR";
    /**
     * @generated from protobuf enum value: OP_FREQUENT = 3;
     */
    DbGateOpcodes[DbGateOpcodes["OP_FREQUENT"] = 3] = "OP_FREQUENT";
    /**
     * @generated from protobuf enum value: OP_NODE_FORWARD_ERROR = 4;
     */
    DbGateOpcodes[DbGateOpcodes["OP_NODE_FORWARD_ERROR"] = 4] = "OP_NODE_FORWARD_ERROR";
    /**
     * @generated from protobuf enum value: OP_NOT_FOUND_CONFIG = 5;
     */
    DbGateOpcodes[DbGateOpcodes["OP_NOT_FOUND_CONFIG"] = 5] = "OP_NOT_FOUND_CONFIG";
    /**
     * @generated from protobuf enum value: OP_SYSTEM_BUSY = 6;
     */
    DbGateOpcodes[DbGateOpcodes["OP_SYSTEM_BUSY"] = 6] = "OP_SYSTEM_BUSY";
    /**
     * @generated from protobuf enum value: OP_GM_UID_BIND = 7;
     */
    DbGateOpcodes[DbGateOpcodes["OP_GM_UID_BIND"] = 7] = "OP_GM_UID_BIND";
    /**
     * @generated from protobuf enum value: OP_FORBIDDEN = 8;
     */
    DbGateOpcodes[DbGateOpcodes["OP_FORBIDDEN"] = 8] = "OP_FORBIDDEN";
    /**
     * @generated from protobuf enum value: OP_STOP_REGISTER = 10;
     */
    DbGateOpcodes[DbGateOpcodes["OP_STOP_REGISTER"] = 10] = "OP_STOP_REGISTER";
    /**
     * @generated from protobuf enum value: OP_STOP_SERVER = 11;
     */
    DbGateOpcodes[DbGateOpcodes["OP_STOP_SERVER"] = 11] = "OP_STOP_SERVER";
    /**
     * @generated from protobuf enum value: OP_ACCOUNT_VEIRFY_ERROR = 12;
     */
    DbGateOpcodes[DbGateOpcodes["OP_ACCOUNT_VEIRFY_ERROR"] = 12] = "OP_ACCOUNT_VEIRFY_ERROR";
    /**
     * @generated from protobuf enum value: OP_ACCOUNT_FREEZE = 13;
     */
    DbGateOpcodes[DbGateOpcodes["OP_ACCOUNT_FREEZE"] = 13] = "OP_ACCOUNT_FREEZE";
    /**
     * @generated from protobuf enum value: OP_REPEAT_LOGIN = 14;
     */
    DbGateOpcodes[DbGateOpcodes["OP_REPEAT_LOGIN"] = 14] = "OP_REPEAT_LOGIN";
    /**
     * @generated from protobuf enum value: OP_CLIENT_VERSION_ERROR = 15;
     */
    DbGateOpcodes[DbGateOpcodes["OP_CLIENT_VERSION_ERROR"] = 15] = "OP_CLIENT_VERSION_ERROR";
    /**
     * @generated from protobuf enum value: OP_TOKEN_ERROR = 16;
     */
    DbGateOpcodes[DbGateOpcodes["OP_TOKEN_ERROR"] = 16] = "OP_TOKEN_ERROR";
    /**
     * @generated from protobuf enum value: OP_ACCOUNT_NOT_EXIST = 17;
     */
    DbGateOpcodes[DbGateOpcodes["OP_ACCOUNT_NOT_EXIST"] = 17] = "OP_ACCOUNT_NOT_EXIST";
    /**
     * @generated from protobuf enum value: OP_WAIT_OTHER_LOGIN = 18;
     */
    DbGateOpcodes[DbGateOpcodes["OP_WAIT_OTHER_LOGIN"] = 18] = "OP_WAIT_OTHER_LOGIN";
    /**
     * @generated from protobuf enum value: OP_ANOTHER_LOGIN = 19;
     */
    DbGateOpcodes[DbGateOpcodes["OP_ANOTHER_LOGIN"] = 19] = "OP_ANOTHER_LOGIN";
    /**
     * @generated from protobuf enum value: OP_CLIENT_FORCE_UPDATE = 20;
     */
    DbGateOpcodes[DbGateOpcodes["OP_CLIENT_FORCE_UPDATE"] = 20] = "OP_CLIENT_FORCE_UPDATE";
    /**
     * @generated from protobuf enum value: OP_BLACK_UID = 21;
     */
    DbGateOpcodes[DbGateOpcodes["OP_BLACK_UID"] = 21] = "OP_BLACK_UID";
    /**
     * @generated from protobuf enum value: OP_LOGIN_DB_FAIL = 22;
     */
    DbGateOpcodes[DbGateOpcodes["OP_LOGIN_DB_FAIL"] = 22] = "OP_LOGIN_DB_FAIL";
    /**
     * @generated from protobuf enum value: OP_LOGIN_INIT_FAIL = 23;
     */
    DbGateOpcodes[DbGateOpcodes["OP_LOGIN_INIT_FAIL"] = 23] = "OP_LOGIN_INIT_FAIL";
    /**
     * @generated from protobuf enum value: OP_MYSQL_DUPLICATE = 24;
     */
    DbGateOpcodes[DbGateOpcodes["OP_MYSQL_DUPLICATE"] = 24] = "OP_MYSQL_DUPLICATE";
    /**
     * @generated from protobuf enum value: OP_MAX_PLAYER = 25;
     */
    DbGateOpcodes[DbGateOpcodes["OP_MAX_PLAYER"] = 25] = "OP_MAX_PLAYER";
    /**
     * @generated from protobuf enum value: OP_ANTI_ADDICT = 26;
     */
    DbGateOpcodes[DbGateOpcodes["OP_ANTI_ADDICT"] = 26] = "OP_ANTI_ADDICT";
    /**
     * @generated from protobuf enum value: OP_PS_PLAYER_WITHOUT_ONLINE_ID = 27;
     */
    DbGateOpcodes[DbGateOpcodes["OP_PS_PLAYER_WITHOUT_ONLINE_ID"] = 27] = "OP_PS_PLAYER_WITHOUT_ONLINE_ID";
    /**
     * @generated from protobuf enum value: OP_ONLINE_ID_NOT_FOUND = 28;
     */
    DbGateOpcodes[DbGateOpcodes["OP_ONLINE_ID_NOT_FOUND"] = 28] = "OP_ONLINE_ID_NOT_FOUND";
    /**
     * @generated from protobuf enum value: OP_ONLNE_ID_NOT_MATCH = 29;
     */
    DbGateOpcodes[DbGateOpcodes["OP_ONLNE_ID_NOT_MATCH"] = 29] = "OP_ONLNE_ID_NOT_MATCH";
    /**
     * @generated from protobuf enum value: OP_REGISTER_IS_FULL = 30;
     */
    DbGateOpcodes[DbGateOpcodes["OP_REGISTER_IS_FULL"] = 30] = "OP_REGISTER_IS_FULL";
    /**
     * @generated from protobuf enum value: OP_CHECKSUM_INVALID = 31;
     */
    DbGateOpcodes[DbGateOpcodes["OP_CHECKSUM_INVALID"] = 31] = "OP_CHECKSUM_INVALID";
    /**
     * @generated from protobuf enum value: OP_BLACK_REGISTER_IP = 32;
     */
    DbGateOpcodes[DbGateOpcodes["OP_BLACK_REGISTER_IP"] = 32] = "OP_BLACK_REGISTER_IP";
    /**
     * @generated from protobuf enum value: OP_EXCEED_REGISTER_RATE = 33;
     */
    DbGateOpcodes[DbGateOpcodes["OP_EXCEED_REGISTER_RATE"] = 33] = "OP_EXCEED_REGISTER_RATE";
    /**
     * @generated from protobuf enum value: OP_UNKNOWN_PLATFORM = 34;
     */
    DbGateOpcodes[DbGateOpcodes["OP_UNKNOWN_PLATFORM"] = 34] = "OP_UNKNOWN_PLATFORM";
    /**
     * @generated from protobuf enum value: OP_TOKEN_PARAM_ERROR = 35;
     */
    DbGateOpcodes[DbGateOpcodes["OP_TOKEN_PARAM_ERROR"] = 35] = "OP_TOKEN_PARAM_ERROR";
    /**
     * @generated from protobuf enum value: OP_ANTI_OFFLINE_ERROR = 36;
     */
    DbGateOpcodes[DbGateOpcodes["OP_ANTI_OFFLINE_ERROR"] = 36] = "OP_ANTI_OFFLINE_ERROR";
    /**
     * @generated from protobuf enum value: OP_BLACK_LOGIN_IP = 37;
     */
    DbGateOpcodes[DbGateOpcodes["OP_BLACK_LOGIN_IP"] = 37] = "OP_BLACK_LOGIN_IP";
    /**
     * @generated from protobuf enum value: OP_GET_TOKEN_SESSION_HAS_UID = 38;
     */
    DbGateOpcodes[DbGateOpcodes["OP_GET_TOKEN_SESSION_HAS_UID"] = 38] = "OP_GET_TOKEN_SESSION_HAS_UID";
    /**
     * @generated from protobuf enum value: OP_ENVIRONMENT_ERROR = 39;
     */
    DbGateOpcodes[DbGateOpcodes["OP_ENVIRONMENT_ERROR"] = 39] = "OP_ENVIRONMENT_ERROR";
    /**
     * @generated from protobuf enum value: OP_CHECK_CLIENT_VERSION_HASH_FAIL = 40;
     */
    DbGateOpcodes[DbGateOpcodes["OP_CHECK_CLIENT_VERSION_HASH_FAIL"] = 40] = "OP_CHECK_CLIENT_VERSION_HASH_FAIL";
    /**
     * @generated from protobuf enum value: OP_MINOR_REGISTER_FOBIDDEN = 41;
     */
    DbGateOpcodes[DbGateOpcodes["OP_MINOR_REGISTER_FOBIDDEN"] = 41] = "OP_MINOR_REGISTER_FOBIDDEN";
    /**
     * @generated from protobuf enum value: OP_SECURITY_LIBRARY_ERROR = 42;
     */
    DbGateOpcodes[DbGateOpcodes["OP_SECURITY_LIBRARY_ERROR"] = 42] = "OP_SECURITY_LIBRARY_ERROR";
})(DbGateOpcodes = exports.DbGateOpcodes || (exports.DbGateOpcodes = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GetDbGateOperationalDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.GetDbGateOperationalDataReq", [
            { no: 1, name: "list_service_infos", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { listServiceInfos: false };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool list_service_infos */ 1:
                    message.listServiceInfos = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool list_service_infos = 1; */
        if (message.listServiceInfos !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.listServiceInfos);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetDbGateOperationalDataReq
 */
exports.GetDbGateOperationalDataReq = new GetDbGateOperationalDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDbGateOperationalDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.GetDbGateOperationalDataRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "db_connected", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "connected_service_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "service_infos", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ServiceBasicInfo },
            { no: 5, name: "total_queries_performed", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "total_failed_queries", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "total_succ_queries", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "performance_stats", kind: "message", T: () => exports.OperationalData }
        ]);
    }
    create(value) {
        const message = { retcode: 0, dbConnected: false, connectedServiceCount: 0, serviceInfos: [], totalQueriesPerformed: 0, totalFailedQueries: 0, totalSuccQueries: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* bool db_connected */ 2:
                    message.dbConnected = reader.bool();
                    break;
                case /* uint32 connected_service_count */ 3:
                    message.connectedServiceCount = reader.uint32();
                    break;
                case /* repeated com.yonakaps.package.ServiceBasicInfo service_infos */ 4:
                    message.serviceInfos.push(exports.ServiceBasicInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 total_queries_performed */ 5:
                    message.totalQueriesPerformed = reader.uint32();
                    break;
                case /* uint32 total_failed_queries */ 6:
                    message.totalFailedQueries = reader.uint32();
                    break;
                case /* uint32 total_succ_queries */ 8:
                    message.totalSuccQueries = reader.uint32();
                    break;
                case /* com.yonakaps.package.OperationalData performance_stats */ 9:
                    message.performanceStats = exports.OperationalData.internalBinaryRead(reader, reader.uint32(), options, message.performanceStats);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* bool db_connected = 2; */
        if (message.dbConnected !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.dbConnected);
        /* uint32 connected_service_count = 3; */
        if (message.connectedServiceCount !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.connectedServiceCount);
        /* repeated com.yonakaps.package.ServiceBasicInfo service_infos = 4; */
        for (let i = 0; i < message.serviceInfos.length; i++)
            exports.ServiceBasicInfo.internalBinaryWrite(message.serviceInfos[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 total_queries_performed = 5; */
        if (message.totalQueriesPerformed !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.totalQueriesPerformed);
        /* uint32 total_failed_queries = 6; */
        if (message.totalFailedQueries !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.totalFailedQueries);
        /* uint32 total_succ_queries = 8; */
        if (message.totalSuccQueries !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.totalSuccQueries);
        /* com.yonakaps.package.OperationalData performance_stats = 9; */
        if (message.performanceStats)
            exports.OperationalData.internalBinaryWrite(message.performanceStats, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetDbGateOperationalDataRsp
 */
exports.GetDbGateOperationalDataRsp = new GetDbGateOperationalDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InitializeConnectionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.InitializeConnectionReq", [
            { no: 1, name: "service_type", kind: "enum", T: () => ["com.yonakaps.package.ServiceType", ServiceType, "SERVICE_TYPE_"] },
            { no: 2, name: "dbgate_client_time", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { serviceType: 0, dbgateClientTime: 0n };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* com.yonakaps.package.ServiceType service_type */ 1:
                    message.serviceType = reader.int32();
                    break;
                case /* int64 dbgate_client_time */ 2:
                    message.dbgateClientTime = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* com.yonakaps.package.ServiceType service_type = 1; */
        if (message.serviceType !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.serviceType);
        /* int64 dbgate_client_time = 2; */
        if (message.dbgateClientTime !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).int64(message.dbgateClientTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.InitializeConnectionReq
 */
exports.InitializeConnectionReq = new InitializeConnectionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class InitializeConnectionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.InitializeConnectionRsp", [
            { no: 2, name: "dbgate_server_time", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { dbgateServerTime: 0n };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 dbgate_server_time */ 2:
                    message.dbgateServerTime = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int64 dbgate_server_time = 2; */
        if (message.dbgateServerTime !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).int64(message.dbgateServerTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.InitializeConnectionRsp
 */
exports.InitializeConnectionRsp = new InitializeConnectionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServicePingAckReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.ServicePingAckReq", [
            { no: 1, name: "transaction", kind: "message", T: () => exports.PingTransaction },
            { no: 2, name: "transaction_type", kind: "enum", T: () => ["com.yonakaps.package.PingTransactionType", PingTransactionType] }
        ]);
    }
    create(value) {
        const message = { transactionType: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* com.yonakaps.package.PingTransaction transaction */ 1:
                    message.transaction = exports.PingTransaction.internalBinaryRead(reader, reader.uint32(), options, message.transaction);
                    break;
                case /* com.yonakaps.package.PingTransactionType transaction_type */ 2:
                    message.transactionType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* com.yonakaps.package.PingTransaction transaction = 1; */
        if (message.transaction)
            exports.PingTransaction.internalBinaryWrite(message.transaction, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.yonakaps.package.PingTransactionType transaction_type = 2; */
        if (message.transactionType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.transactionType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.ServicePingAckReq
 */
exports.ServicePingAckReq = new ServicePingAckReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServicePingAckRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.ServicePingAckRsp", [
            { no: 1, name: "acknowledge_ms", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "transaction_type", kind: "enum", T: () => ["com.yonakaps.package.PingTransactionType", PingTransactionType] }
        ]);
    }
    create(value) {
        const message = { acknowledgeMs: 0, transactionType: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 acknowledge_ms */ 1:
                    message.acknowledgeMs = reader.uint32();
                    break;
                case /* com.yonakaps.package.PingTransactionType transaction_type */ 2:
                    message.transactionType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 acknowledge_ms = 1; */
        if (message.acknowledgeMs !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.acknowledgeMs);
        /* com.yonakaps.package.PingTransactionType transaction_type = 2; */
        if (message.transactionType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.transactionType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.ServicePingAckRsp
 */
exports.ServicePingAckRsp = new ServicePingAckRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServiceHeartBeatNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.ServiceHeartBeatNotify", [
            { no: 1, name: "transaction", kind: "message", T: () => exports.PingTransaction },
            { no: 2, name: "transaction_type", kind: "enum", T: () => ["com.yonakaps.package.PingTransactionType", PingTransactionType] }
        ]);
    }
    create(value) {
        const message = { transactionType: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* com.yonakaps.package.PingTransaction transaction */ 1:
                    message.transaction = exports.PingTransaction.internalBinaryRead(reader, reader.uint32(), options, message.transaction);
                    break;
                case /* com.yonakaps.package.PingTransactionType transaction_type */ 2:
                    message.transactionType = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* com.yonakaps.package.PingTransaction transaction = 1; */
        if (message.transaction)
            exports.PingTransaction.internalBinaryWrite(message.transaction, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.yonakaps.package.PingTransactionType transaction_type = 2; */
        if (message.transactionType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.transactionType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.ServiceHeartBeatNotify
 */
exports.ServiceHeartBeatNotify = new ServiceHeartBeatNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSessionDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.GetSessionDataReq", [
            { no: 1, name: "session_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "from_uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { sessionKey: "", fromUid: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string session_key */ 1:
                    message.sessionKey = reader.string();
                    break;
                case /* string from_uid */ 2:
                    message.fromUid = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string session_key = 1; */
        if (message.sessionKey !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.sessionKey);
        /* string from_uid = 2; */
        if (message.fromUid !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.fromUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetSessionDataReq
 */
exports.GetSessionDataReq = new GetSessionDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSessionDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.GetSessionDataRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "session", kind: "message", T: () => exports.Session }
        ]);
    }
    create(value) {
        const message = { retcode: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* com.yonakaps.package.Session session */ 2:
                    message.session = exports.Session.internalBinaryRead(reader, reader.uint32(), options, message.session);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* com.yonakaps.package.Session session = 2; */
        if (message.session)
            exports.Session.internalBinaryWrite(message.session, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetSessionDataRsp
 */
exports.GetSessionDataRsp = new GetSessionDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateSessionDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.UpdateSessionDataReq", [
            { no: 1, name: "session_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "from_uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "session_data", kind: "message", T: () => exports.Session },
            { no: 3, name: "delete_session", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { sessionKey: "", fromUid: "", deleteSession: false };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string session_key */ 1:
                    message.sessionKey = reader.string();
                    break;
                case /* string from_uid */ 2:
                    message.fromUid = reader.string();
                    break;
                case /* com.yonakaps.package.Session session_data */ 4:
                    message.sessionData = exports.Session.internalBinaryRead(reader, reader.uint32(), options, message.sessionData);
                    break;
                case /* bool delete_session */ 3:
                    message.deleteSession = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string session_key = 1; */
        if (message.sessionKey !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.sessionKey);
        /* string from_uid = 2; */
        if (message.fromUid !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.fromUid);
        /* com.yonakaps.package.Session session_data = 4; */
        if (message.sessionData)
            exports.Session.internalBinaryWrite(message.sessionData, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool delete_session = 3; */
        if (message.deleteSession !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.deleteSession);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdateSessionDataReq
 */
exports.UpdateSessionDataReq = new UpdateSessionDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateSessionDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.UpdateSessionDataRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdateSessionDataRsp
 */
exports.UpdateSessionDataRsp = new UpdateSessionDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAccountDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.GetAccountDataReq", [
            { no: 1, name: "from_uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { fromUid: "", username: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string from_uid */ 1:
                    message.fromUid = reader.string();
                    break;
                case /* string username */ 2:
                    message.username = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string from_uid = 1; */
        if (message.fromUid !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.fromUid);
        /* string username = 2; */
        if (message.username !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.username);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetAccountDataReq
 */
exports.GetAccountDataReq = new GetAccountDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAccountDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.GetAccountDataRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "account", kind: "message", T: () => exports.Account }
        ]);
    }
    create(value) {
        const message = { retcode: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* com.yonakaps.package.Account account */ 2:
                    message.account = exports.Account.internalBinaryRead(reader, reader.uint32(), options, message.account);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* com.yonakaps.package.Account account = 2; */
        if (message.account)
            exports.Account.internalBinaryWrite(message.account, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetAccountDataRsp
 */
exports.GetAccountDataRsp = new GetAccountDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateAccountDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.UpdateAccountDataReq", [
            { no: 2, name: "uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "account_data", kind: "message", T: () => exports.Account },
            { no: 3, name: "delete_account", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { uid: "", deleteAccount: false };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string uid */ 2:
                    message.uid = reader.string();
                    break;
                case /* com.yonakaps.package.Account account_data */ 4:
                    message.accountData = exports.Account.internalBinaryRead(reader, reader.uint32(), options, message.accountData);
                    break;
                case /* bool delete_account */ 3:
                    message.deleteAccount = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string uid = 2; */
        if (message.uid !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.uid);
        /* com.yonakaps.package.Account account_data = 4; */
        if (message.accountData)
            exports.Account.internalBinaryWrite(message.accountData, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool delete_account = 3; */
        if (message.deleteAccount !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.deleteAccount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdateAccountDataReq
 */
exports.UpdateAccountDataReq = new UpdateAccountDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateAccountDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.UpdateAccountDataRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdateAccountDataRsp
 */
exports.UpdateAccountDataRsp = new UpdateAccountDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.GetPlayerDataReq", [
            { no: 1, name: "uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { uid: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string uid */ 1:
                    message.uid = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string uid = 1; */
        if (message.uid !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetPlayerDataReq
 */
exports.GetPlayerDataReq = new GetPlayerDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.GetPlayerDataRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "player", kind: "message", T: () => exports.Player }
        ]);
    }
    create(value) {
        const message = { retcode: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* com.yonakaps.package.Player player */ 2:
                    message.player = exports.Player.internalBinaryRead(reader, reader.uint32(), options, message.player);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* com.yonakaps.package.Player player = 2; */
        if (message.player)
            exports.Player.internalBinaryWrite(message.player, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetPlayerDataRsp
 */
exports.GetPlayerDataRsp = new GetPlayerDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePlayerDataReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.UpdatePlayerDataReq", [
            { no: 2, name: "uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "player_data", kind: "message", T: () => exports.Player },
            { no: 3, name: "delete_player", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { uid: "", deletePlayer: false };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string uid */ 2:
                    message.uid = reader.string();
                    break;
                case /* com.yonakaps.package.Player player_data */ 4:
                    message.playerData = exports.Player.internalBinaryRead(reader, reader.uint32(), options, message.playerData);
                    break;
                case /* bool delete_player */ 3:
                    message.deletePlayer = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string uid = 2; */
        if (message.uid !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.uid);
        /* com.yonakaps.package.Player player_data = 4; */
        if (message.playerData)
            exports.Player.internalBinaryWrite(message.playerData, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool delete_player = 3; */
        if (message.deletePlayer !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.deletePlayer);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdatePlayerDataReq
 */
exports.UpdatePlayerDataReq = new UpdatePlayerDataReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePlayerDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.UpdatePlayerDataRsp", [
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdatePlayerDataRsp
 */
exports.UpdatePlayerDataRsp = new UpdatePlayerDataRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerMailCollectionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.GetPlayerMailCollectionReq", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetPlayerMailCollectionReq
 */
exports.GetPlayerMailCollectionReq = new GetPlayerMailCollectionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerMailCollectionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.GetPlayerMailCollectionRsp", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetPlayerMailCollectionRsp
 */
exports.GetPlayerMailCollectionRsp = new GetPlayerMailCollectionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePlayerMailCollectionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.UpdatePlayerMailCollectionReq", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdatePlayerMailCollectionReq
 */
exports.UpdatePlayerMailCollectionReq = new UpdatePlayerMailCollectionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePlayerMailCollectionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.UpdatePlayerMailCollectionRsp", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdatePlayerMailCollectionRsp
 */
exports.UpdatePlayerMailCollectionRsp = new UpdatePlayerMailCollectionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerAvatarCollectionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.GetPlayerAvatarCollectionReq", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetPlayerAvatarCollectionReq
 */
exports.GetPlayerAvatarCollectionReq = new GetPlayerAvatarCollectionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetPlayerAvatarCollectionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.GetPlayerAvatarCollectionRsp", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetPlayerAvatarCollectionRsp
 */
exports.GetPlayerAvatarCollectionRsp = new GetPlayerAvatarCollectionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateAvatarDataCollectionReq$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.UpdateAvatarDataCollectionReq", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdateAvatarDataCollectionReq
 */
exports.UpdateAvatarDataCollectionReq = new UpdateAvatarDataCollectionReq$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateAvatarDataCollectionRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.UpdateAvatarDataCollectionRsp", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdateAvatarDataCollectionRsp
 */
exports.UpdateAvatarDataCollectionRsp = new UpdateAvatarDataCollectionRsp$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CommandExceptionNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.CommandExceptionNotify", [
            { no: 1, name: "command", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "is_command_invalid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "is_data_malformed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { command: "", isCommandInvalid: false, isDataMalformed: false, message: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string command */ 1:
                    message.command = reader.string();
                    break;
                case /* bool is_command_invalid */ 2:
                    message.isCommandInvalid = reader.bool();
                    break;
                case /* bool is_data_malformed */ 4:
                    message.isDataMalformed = reader.bool();
                    break;
                case /* string message */ 3:
                    message.message = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string command = 1; */
        if (message.command !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.command);
        /* bool is_command_invalid = 2; */
        if (message.isCommandInvalid !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isCommandInvalid);
        /* bool is_data_malformed = 4; */
        if (message.isDataMalformed !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isDataMalformed);
        /* string message = 3; */
        if (message.message !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.CommandExceptionNotify
 */
exports.CommandExceptionNotify = new CommandExceptionNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Player$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.Player", [
            { no: 1, name: "open_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "nickname", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "signature", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "profilePicture", kind: "message", T: () => exports.PlayerProfilePicture },
            { no: 5, name: "props", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 7, name: "registrationDate", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "nameCardId", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "travelerId", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "birthday", kind: "message", T: () => exports.PlayerBirthday }
        ]);
    }
    create(value) {
        const message = { openId: 0, nickname: "", signature: "", props: {}, registrationDate: 0n, nameCardId: 0, travelerId: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 open_id */ 1:
                    message.openId = reader.uint32();
                    break;
                case /* string nickname */ 2:
                    message.nickname = reader.string();
                    break;
                case /* string signature */ 3:
                    message.signature = reader.string();
                    break;
                case /* com.yonakaps.package.PlayerProfilePicture profilePicture */ 4:
                    message.profilePicture = exports.PlayerProfilePicture.internalBinaryRead(reader, reader.uint32(), options, message.profilePicture);
                    break;
                case /* map<string, uint32> props */ 5:
                    this.binaryReadMap5(message.props, reader, options);
                    break;
                case /* uint64 registrationDate */ 7:
                    message.registrationDate = reader.uint64().toBigInt();
                    break;
                case /* uint32 nameCardId */ 8:
                    message.nameCardId = reader.uint32();
                    break;
                case /* uint32 travelerId */ 9:
                    message.travelerId = reader.uint32();
                    break;
                case /* com.yonakaps.package.PlayerBirthday birthday */ 10:
                    message.birthday = exports.PlayerBirthday.internalBinaryRead(reader, reader.uint32(), options, message.birthday);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap5(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.yonakaps.package.Player.props");
            }
        }
        map[key ?? ""] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 open_id = 1; */
        if (message.openId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.openId);
        /* string nickname = 2; */
        if (message.nickname !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.nickname);
        /* string signature = 3; */
        if (message.signature !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.signature);
        /* com.yonakaps.package.PlayerProfilePicture profilePicture = 4; */
        if (message.profilePicture)
            exports.PlayerProfilePicture.internalBinaryWrite(message.profilePicture, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<string, uint32> props = 5; */
        for (let k of Object.keys(message.props))
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.LengthDelimited).string(k).tag(2, runtime_1.WireType.Varint).uint32(message.props[k]).join();
        /* uint64 registrationDate = 7; */
        if (message.registrationDate !== 0n)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.registrationDate);
        /* uint32 nameCardId = 8; */
        if (message.nameCardId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.nameCardId);
        /* uint32 travelerId = 9; */
        if (message.travelerId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.travelerId);
        /* com.yonakaps.package.PlayerBirthday birthday = 10; */
        if (message.birthday)
            exports.PlayerBirthday.internalBinaryWrite(message.birthday, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.Player
 */
exports.Player = new Player$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Account$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.Account", [
            { no: 1, name: "uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "unique_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "permission", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { uid: "", email: "", username: "", uniqueToken: "", permission: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string uid */ 1:
                    message.uid = reader.string();
                    break;
                case /* string email */ 5:
                    message.email = reader.string();
                    break;
                case /* string username */ 2:
                    message.username = reader.string();
                    break;
                case /* string unique_token */ 3:
                    message.uniqueToken = reader.string();
                    break;
                case /* string permission */ 4:
                    message.permission = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string uid = 1; */
        if (message.uid !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.uid);
        /* string email = 5; */
        if (message.email !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.email);
        /* string username = 2; */
        if (message.username !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.username);
        /* string unique_token = 3; */
        if (message.uniqueToken !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.uniqueToken);
        /* string permission = 4; */
        if (message.permission !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.permission);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.Account
 */
exports.Account = new Account$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Session$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.Session", [
            { no: 1, name: "endpoint", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "device_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "time_to_live", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "session_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "for_uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { endpoint: "", deviceId: "", timeToLive: 0n, sessionKey: "", forUid: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string endpoint */ 1:
                    message.endpoint = reader.string();
                    break;
                case /* string device_id */ 2:
                    message.deviceId = reader.string();
                    break;
                case /* uint64 time_to_live */ 3:
                    message.timeToLive = reader.uint64().toBigInt();
                    break;
                case /* string session_key */ 4:
                    message.sessionKey = reader.string();
                    break;
                case /* string for_uid */ 5:
                    message.forUid = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string endpoint = 1; */
        if (message.endpoint !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.endpoint);
        /* string device_id = 2; */
        if (message.deviceId !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.deviceId);
        /* uint64 time_to_live = 3; */
        if (message.timeToLive !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.timeToLive);
        /* string session_key = 4; */
        if (message.sessionKey !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.sessionKey);
        /* string for_uid = 5; */
        if (message.forUid !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.forUid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.Session
 */
exports.Session = new Session$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerProfilePicture$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.PlayerProfilePicture", [
            { no: 1, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "costume_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarId: 0, costumeId: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 avatar_id */ 1:
                    message.avatarId = reader.uint32();
                    break;
                case /* uint32 costume_id */ 2:
                    message.costumeId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 avatar_id = 1; */
        if (message.avatarId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* uint32 costume_id = 2; */
        if (message.costumeId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.costumeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.PlayerProfilePicture
 */
exports.PlayerProfilePicture = new PlayerProfilePicture$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PlayerBirthday$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.PlayerBirthday", [
            { no: 1, name: "month", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "day", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { month: 0, day: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 month */ 1:
                    message.month = reader.uint32();
                    break;
                case /* uint32 day */ 2:
                    message.day = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 month = 1; */
        if (message.month !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.month);
        /* uint32 day = 2; */
        if (message.day !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.day);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.PlayerBirthday
 */
exports.PlayerBirthday = new PlayerBirthday$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PingTransaction$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.PingTransaction", [
            { no: 1, name: "creation_time", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "acknowledge_time", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "is_transaction_acked", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { creationTime: 0n, acknowledgeTime: 0n, isTransactionAcked: false };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 creation_time */ 1:
                    message.creationTime = reader.int64().toBigInt();
                    break;
                case /* int64 acknowledge_time */ 2:
                    message.acknowledgeTime = reader.int64().toBigInt();
                    break;
                case /* bool is_transaction_acked */ 4:
                    message.isTransactionAcked = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int64 creation_time = 1; */
        if (message.creationTime !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).int64(message.creationTime);
        /* int64 acknowledge_time = 2; */
        if (message.acknowledgeTime !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).int64(message.acknowledgeTime);
        /* bool is_transaction_acked = 4; */
        if (message.isTransactionAcked !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isTransactionAcked);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.PingTransaction
 */
exports.PingTransaction = new PingTransaction$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ServiceBasicInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.ServiceBasicInfo", [
            { no: 2, name: "is_alive", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "service_latency", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "service_type", kind: "enum", T: () => ["com.yonakaps.package.ServiceType", ServiceType, "SERVICE_TYPE_"] },
            { no: 4, name: "last_ping_transaction", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { isAlive: false, serviceLatency: 0, serviceType: 0, lastPingTransaction: 0n };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool is_alive */ 2:
                    message.isAlive = reader.bool();
                    break;
                case /* uint32 service_latency */ 1:
                    message.serviceLatency = reader.uint32();
                    break;
                case /* com.yonakaps.package.ServiceType service_type */ 3:
                    message.serviceType = reader.int32();
                    break;
                case /* uint64 last_ping_transaction */ 4:
                    message.lastPingTransaction = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_alive = 2; */
        if (message.isAlive !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isAlive);
        /* uint32 service_latency = 1; */
        if (message.serviceLatency !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.serviceLatency);
        /* com.yonakaps.package.ServiceType service_type = 3; */
        if (message.serviceType !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.serviceType);
        /* uint64 last_ping_transaction = 4; */
        if (message.lastPingTransaction !== 0n)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.lastPingTransaction);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.ServiceBasicInfo
 */
exports.ServiceBasicInfo = new ServiceBasicInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OperationalData$Type extends runtime_5.MessageType {
    constructor() {
        super("com.yonakaps.package.OperationalData", [
            { no: 1, name: "memory_usage", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "process_environment", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "memory_usage_percentage", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "overall_memory", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "dbgate_uptime", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "process_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { memoryUsage: 0n, processEnvironment: "", memoryUsagePercentage: 0, overallMemory: 0n, dbgateUptime: 0n, processId: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 memory_usage */ 1:
                    message.memoryUsage = reader.uint64().toBigInt();
                    break;
                case /* string process_environment */ 5:
                    message.processEnvironment = reader.string();
                    break;
                case /* uint32 memory_usage_percentage */ 2:
                    message.memoryUsagePercentage = reader.uint32();
                    break;
                case /* uint64 overall_memory */ 3:
                    message.overallMemory = reader.uint64().toBigInt();
                    break;
                case /* uint64 dbgate_uptime */ 6:
                    message.dbgateUptime = reader.uint64().toBigInt();
                    break;
                case /* uint32 process_id */ 4:
                    message.processId = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint64 memory_usage = 1; */
        if (message.memoryUsage !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.memoryUsage);
        /* string process_environment = 5; */
        if (message.processEnvironment !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.processEnvironment);
        /* uint32 memory_usage_percentage = 2; */
        if (message.memoryUsagePercentage !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.memoryUsagePercentage);
        /* uint64 overall_memory = 3; */
        if (message.overallMemory !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.overallMemory);
        /* uint64 dbgate_uptime = 6; */
        if (message.dbgateUptime !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.dbgateUptime);
        /* uint32 process_id = 4; */
        if (message.processId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.processId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.OperationalData
 */
exports.OperationalData = new OperationalData$Type();
//# sourceMappingURL=GatewayProtocolBuffers.js.map