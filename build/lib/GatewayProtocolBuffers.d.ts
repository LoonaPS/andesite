import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message com.yonakaps.package.GetDbGateOperationalDataReq
 */
export interface GetDbGateOperationalDataReq {
    /**
     * @generated from protobuf field: bool list_service_infos = 1;
     */
    listServiceInfos: boolean;
}
/**
 * @generated from protobuf message com.yonakaps.package.GetDbGateOperationalDataRsp
 */
export interface GetDbGateOperationalDataRsp {
    /**
     * @generated from protobuf field: int32 retcode = 1;
     */
    retcode: number;
    /**
     * @generated from protobuf field: bool db_connected = 2;
     */
    dbConnected: boolean;
    /**
     * @generated from protobuf field: uint32 connected_service_count = 3;
     */
    connectedServiceCount: number;
    /**
     * @generated from protobuf field: repeated com.yonakaps.package.ServiceBasicInfo service_infos = 4;
     */
    serviceInfos: ServiceBasicInfo[];
    /**
     * @generated from protobuf field: uint32 total_queries_performed = 5;
     */
    totalQueriesPerformed: number;
    /**
     * @generated from protobuf field: uint32 total_failed_queries = 6;
     */
    totalFailedQueries: number;
    /**
     * @generated from protobuf field: uint32 total_succ_queries = 8;
     */
    totalSuccQueries: number;
    /**
     * @generated from protobuf field: com.yonakaps.package.OperationalData performance_stats = 9;
     */
    performanceStats?: OperationalData;
}
/**
 * @generated from protobuf message com.yonakaps.package.InitializeConnectionReq
 */
export interface InitializeConnectionReq {
    /**
     * @generated from protobuf field: com.yonakaps.package.ServiceType service_type = 1;
     */
    serviceType: ServiceType;
    /**
     * @generated from protobuf field: int64 dbgate_client_time = 2;
     */
    dbgateClientTime: bigint;
}
/**
 * @generated from protobuf message com.yonakaps.package.InitializeConnectionRsp
 */
export interface InitializeConnectionRsp {
    /**
     * @generated from protobuf field: int64 dbgate_server_time = 2;
     */
    dbgateServerTime: bigint;
}
/**
 * @generated from protobuf message com.yonakaps.package.ServicePingAckReq
 */
export interface ServicePingAckReq {
    /**
     * @generated from protobuf field: com.yonakaps.package.PingTransaction transaction = 1;
     */
    transaction?: PingTransaction;
    /**
     * @generated from protobuf field: com.yonakaps.package.PingTransactionType transaction_type = 2;
     */
    transactionType: PingTransactionType;
}
/**
 * @generated from protobuf message com.yonakaps.package.ServicePingAckRsp
 */
export interface ServicePingAckRsp {
    /**
     * @generated from protobuf field: uint32 acknowledge_ms = 1;
     */
    acknowledgeMs: number;
    /**
     * @generated from protobuf field: com.yonakaps.package.PingTransactionType transaction_type = 2;
     */
    transactionType: PingTransactionType;
}
/**
 * @generated from protobuf message com.yonakaps.package.ServiceHeartBeatNotify
 */
export interface ServiceHeartBeatNotify {
    /**
     * @generated from protobuf field: com.yonakaps.package.PingTransaction transaction = 1;
     */
    transaction?: PingTransaction;
    /**
     * @generated from protobuf field: com.yonakaps.package.PingTransactionType transaction_type = 2;
     */
    transactionType: PingTransactionType;
}
/**
 * @generated from protobuf message com.yonakaps.package.GetSessionDataReq
 */
export interface GetSessionDataReq {
    /**
     * @generated from protobuf field: string session_key = 1;
     */
    sessionKey: string;
    /**
     * @generated from protobuf field: string from_uid = 2;
     */
    fromUid: string;
}
/**
 * @generated from protobuf message com.yonakaps.package.GetSessionDataRsp
 */
export interface GetSessionDataRsp {
    /**
     * @generated from protobuf field: int32 retcode = 1;
     */
    retcode: number;
    /**
     * @generated from protobuf field: com.yonakaps.package.Session session = 2;
     */
    session?: Session;
}
/**
 * @generated from protobuf message com.yonakaps.package.UpdateSessionDataReq
 */
export interface UpdateSessionDataReq {
    /**
     * @generated from protobuf field: string session_key = 1;
     */
    sessionKey: string;
    /**
     * @generated from protobuf field: string from_uid = 2;
     */
    fromUid: string;
    /**
     * @generated from protobuf field: com.yonakaps.package.Session session_data = 4;
     */
    sessionData?: Session;
    /**
     * @generated from protobuf field: bool delete_session = 3;
     */
    deleteSession: boolean;
}
/**
 * @generated from protobuf message com.yonakaps.package.UpdateSessionDataRsp
 */
export interface UpdateSessionDataRsp {
    /**
     * @generated from protobuf field: int32 retcode = 1;
     */
    retcode: number;
}
/**
 * @generated from protobuf message com.yonakaps.package.GetAccountDataReq
 */
export interface GetAccountDataReq {
    /**
     * @generated from protobuf field: string from_uid = 1;
     */
    fromUid: string;
    /**
     * @generated from protobuf field: string username = 2;
     */
    username: string;
}
/**
 * @generated from protobuf message com.yonakaps.package.GetAccountDataRsp
 */
export interface GetAccountDataRsp {
    /**
     * @generated from protobuf field: int32 retcode = 1;
     */
    retcode: number;
    /**
     * @generated from protobuf field: com.yonakaps.package.Account account = 2;
     */
    account?: Account;
}
/**
 * @generated from protobuf message com.yonakaps.package.UpdateAccountDataReq
 */
export interface UpdateAccountDataReq {
    /**
     * @generated from protobuf field: string uid = 2;
     */
    uid: string;
    /**
     * @generated from protobuf field: com.yonakaps.package.Account account_data = 4;
     */
    accountData?: Account;
    /**
     * @generated from protobuf field: bool delete_account = 3;
     */
    deleteAccount: boolean;
}
/**
 * @generated from protobuf message com.yonakaps.package.UpdateAccountDataRsp
 */
export interface UpdateAccountDataRsp {
    /**
     * @generated from protobuf field: int32 retcode = 1;
     */
    retcode: number;
}
/**
 * @generated from protobuf message com.yonakaps.package.GetPlayerDataReq
 */
export interface GetPlayerDataReq {
    /**
     * @generated from protobuf field: string uid = 1;
     */
    uid: string;
}
/**
 * @generated from protobuf message com.yonakaps.package.GetPlayerDataRsp
 */
export interface GetPlayerDataRsp {
    /**
     * @generated from protobuf field: int32 retcode = 1;
     */
    retcode: number;
    /**
     * @generated from protobuf field: com.yonakaps.package.Player player = 2;
     */
    player?: Player;
}
/**
 * @generated from protobuf message com.yonakaps.package.UpdatePlayerDataReq
 */
export interface UpdatePlayerDataReq {
    /**
     * @generated from protobuf field: string uid = 2;
     */
    uid: string;
    /**
     * @generated from protobuf field: com.yonakaps.package.Player player_data = 4;
     */
    playerData?: Player;
    /**
     * @generated from protobuf field: bool delete_player = 3;
     */
    deletePlayer: boolean;
}
/**
 * @generated from protobuf message com.yonakaps.package.UpdatePlayerDataRsp
 */
export interface UpdatePlayerDataRsp {
    /**
     * @generated from protobuf field: int32 retcode = 1;
     */
    retcode: number;
}
/**
 * @generated from protobuf message com.yonakaps.package.GetPlayerMailCollectionReq
 */
export interface GetPlayerMailCollectionReq {
}
/**
 * @generated from protobuf message com.yonakaps.package.GetPlayerMailCollectionRsp
 */
export interface GetPlayerMailCollectionRsp {
}
/**
 * @generated from protobuf message com.yonakaps.package.UpdatePlayerMailCollectionReq
 */
export interface UpdatePlayerMailCollectionReq {
}
/**
 * @generated from protobuf message com.yonakaps.package.UpdatePlayerMailCollectionRsp
 */
export interface UpdatePlayerMailCollectionRsp {
}
/**
 * @generated from protobuf message com.yonakaps.package.GetPlayerAvatarCollectionReq
 */
export interface GetPlayerAvatarCollectionReq {
}
/**
 * @generated from protobuf message com.yonakaps.package.GetPlayerAvatarCollectionRsp
 */
export interface GetPlayerAvatarCollectionRsp {
}
/**
 * @generated from protobuf message com.yonakaps.package.UpdateAvatarDataCollectionReq
 */
export interface UpdateAvatarDataCollectionReq {
}
/**
 * @generated from protobuf message com.yonakaps.package.UpdateAvatarDataCollectionRsp
 */
export interface UpdateAvatarDataCollectionRsp {
}
/**
 * @generated from protobuf message com.yonakaps.package.CommandExceptionNotify
 */
export interface CommandExceptionNotify {
    /**
     * @generated from protobuf field: string command = 1;
     */
    command: string;
    /**
     * @generated from protobuf field: bool is_command_invalid = 2;
     */
    isCommandInvalid: boolean;
    /**
     * @generated from protobuf field: bool is_data_malformed = 4;
     */
    isDataMalformed: boolean;
    /**
     * @generated from protobuf field: string message = 3;
     */
    message: string;
}
/**
 * @generated from protobuf message com.yonakaps.package.Player
 */
export interface Player {
    /**
     * @generated from protobuf field: uint32 open_id = 1;
     */
    openId: number;
    /**
     * @generated from protobuf field: string nickname = 2;
     */
    nickname: string;
    /**
     * @generated from protobuf field: string signature = 3;
     */
    signature: string;
    /**
     * @generated from protobuf field: com.yonakaps.package.PlayerProfilePicture profilePicture = 4;
     */
    profilePicture?: PlayerProfilePicture;
    /**
     * @generated from protobuf field: map<string, uint32> props = 5;
     */
    props: {
        [key: string]: number;
    };
    /**
     * @generated from protobuf field: uint64 registrationDate = 7;
     */
    registrationDate: bigint;
    /**
     * @generated from protobuf field: uint32 nameCardId = 8;
     */
    nameCardId: number;
    /**
     * @generated from protobuf field: uint32 travelerId = 9;
     */
    travelerId: number;
    /**
     * @generated from protobuf field: com.yonakaps.package.PlayerBirthday birthday = 10;
     */
    birthday?: PlayerBirthday;
}
/**
 * @generated from protobuf message com.yonakaps.package.Account
 */
export interface Account {
    /**
     * @generated from protobuf field: string uid = 1;
     */
    uid: string;
    /**
     * @generated from protobuf field: string email = 5;
     */
    email: string;
    /**
     * @generated from protobuf field: string username = 2;
     */
    username: string;
    /**
     * @generated from protobuf field: string unique_token = 3;
     */
    uniqueToken: string;
    /**
     * @generated from protobuf field: string permission = 4;
     */
    permission: string;
}
/**
 * @generated from protobuf message com.yonakaps.package.Session
 */
export interface Session {
    /**
     * @generated from protobuf field: string endpoint = 1;
     */
    endpoint: string;
    /**
     * @generated from protobuf field: string device_id = 2;
     */
    deviceId: string;
    /**
     * @generated from protobuf field: uint64 time_to_live = 3;
     */
    timeToLive: bigint;
    /**
     * @generated from protobuf field: string session_key = 4;
     */
    sessionKey: string;
    /**
     * @generated from protobuf field: string for_uid = 5;
     */
    forUid: string;
}
/**
 * @generated from protobuf message com.yonakaps.package.PlayerProfilePicture
 */
export interface PlayerProfilePicture {
    /**
     * @generated from protobuf field: uint32 avatar_id = 1;
     */
    avatarId: number;
    /**
     * @generated from protobuf field: uint32 costume_id = 2;
     */
    costumeId: number;
}
/**
 * @generated from protobuf message com.yonakaps.package.PlayerBirthday
 */
export interface PlayerBirthday {
    /**
     * @generated from protobuf field: uint32 month = 1;
     */
    month: number;
    /**
     * @generated from protobuf field: uint32 day = 2;
     */
    day: number;
}
/**
 * @generated from protobuf message com.yonakaps.package.PingTransaction
 */
export interface PingTransaction {
    /**
     * @generated from protobuf field: int64 creation_time = 1;
     */
    creationTime: bigint;
    /**
     * @generated from protobuf field: int64 acknowledge_time = 2;
     */
    acknowledgeTime: bigint;
    /**
     * @generated from protobuf field: bool is_transaction_acked = 4;
     */
    isTransactionAcked: boolean;
}
/**
 * @generated from protobuf message com.yonakaps.package.ServiceBasicInfo
 */
export interface ServiceBasicInfo {
    /**
     * @generated from protobuf field: bool is_alive = 2;
     */
    isAlive: boolean;
    /**
     * @generated from protobuf field: uint32 service_latency = 1;
     */
    serviceLatency: number;
    /**
     * @generated from protobuf field: com.yonakaps.package.ServiceType service_type = 3;
     */
    serviceType: ServiceType;
    /**
     * @generated from protobuf field: uint64 last_ping_transaction = 4;
     */
    lastPingTransaction: bigint;
}
/**
 * @generated from protobuf message com.yonakaps.package.OperationalData
 */
export interface OperationalData {
    /**
     * @generated from protobuf field: uint64 memory_usage = 1;
     */
    memoryUsage: bigint;
    /**
     * @generated from protobuf field: string process_environment = 5;
     */
    processEnvironment: string;
    /**
     * @generated from protobuf field: uint32 memory_usage_percentage = 2;
     */
    memoryUsagePercentage: number;
    /**
     * @generated from protobuf field: uint64 overall_memory = 3;
     */
    overallMemory: bigint;
    /**
     * @generated from protobuf field: uint64 dbgate_uptime = 6;
     */
    dbgateUptime: bigint;
    /**
     * @generated from protobuf field: uint32 process_id = 4;
     */
    processId: number;
}
/**
 * @generated from protobuf enum com.yonakaps.package.PingTransactionType
 */
export declare enum PingTransactionType {
    /**
     * @generated from protobuf enum value: FIRST_TRANSACTION = 0;
     */
    FIRST_TRANSACTION = 0,
    /**
     * @generated from protobuf enum value: TRANSACTION_SUCC = 2;
     */
    TRANSACTION_SUCC = 2,
    /**
     * @generated from protobuf enum value: IS_ALIVE = 1;
     */
    IS_ALIVE = 1
}
/**
 * @generated from protobuf enum com.yonakaps.package.ServiceType
 */
export declare enum ServiceType {
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_NONE = 0;
     */
    NONE = 0,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_CLIENT = 1;
     */
    CLIENT = 1,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_GATE = 2;
     */
    GATE = 2,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_GAME = 3;
     */
    GAME = 3,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_NODE = 4;
     */
    NODE = 4,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_DB = 5;
     */
    DB = 5,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_SNS = 6;
     */
    SNS = 6,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_DISPATCH = 7;
     */
    DISPATCH = 7,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_MUIP = 8;
     */
    MUIP = 8,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_OFFLINE_MSG = 9;
     */
    OFFLINE_MSG = 9,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_MAIL = 10;
     */
    MAIL = 10,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_MP = 11;
     */
    MP = 11,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_HTTPPROXY = 12;
     */
    HTTPPROXY = 12,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_ACTIVITY = 13;
     */
    ACTIVITY = 13,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_PATHFINDING = 14;
     */
    PATHFINDING = 14,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_SOCIAL = 15;
     */
    SOCIAL = 15,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_OA = 16;
     */
    OA = 16,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_MATCH = 17;
     */
    MATCH = 17,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_OFFLINE_OP = 18;
     */
    OFFLINE_OP = 18,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_TOTHEMOON = 19;
     */
    TOTHEMOON = 19,
    /**
     * @generated from protobuf enum value: SERVICE_TYPE_GCG = 20;
     */
    GCG = 20
}
/**
 * @generated from protobuf enum com.yonakaps.package.DbGateOpcodes
 */
export declare enum DbGateOpcodes {
    /**
     * @generated from protobuf enum value: OP_SUCC = 0;
     */
    OP_SUCC = 0,
    /**
     * @generated from protobuf enum value: OP_FAIL = -1;
     */
    OP_FAIL = -1,
    /**
     * @generated from protobuf enum value: OP_SVR_ERROR = 1;
     */
    OP_SVR_ERROR = 1,
    /**
     * @generated from protobuf enum value: OP_UNKNOWN_ERROR = 2;
     */
    OP_UNKNOWN_ERROR = 2,
    /**
     * @generated from protobuf enum value: OP_FREQUENT = 3;
     */
    OP_FREQUENT = 3,
    /**
     * @generated from protobuf enum value: OP_NODE_FORWARD_ERROR = 4;
     */
    OP_NODE_FORWARD_ERROR = 4,
    /**
     * @generated from protobuf enum value: OP_NOT_FOUND_CONFIG = 5;
     */
    OP_NOT_FOUND_CONFIG = 5,
    /**
     * @generated from protobuf enum value: OP_SYSTEM_BUSY = 6;
     */
    OP_SYSTEM_BUSY = 6,
    /**
     * @generated from protobuf enum value: OP_GM_UID_BIND = 7;
     */
    OP_GM_UID_BIND = 7,
    /**
     * @generated from protobuf enum value: OP_FORBIDDEN = 8;
     */
    OP_FORBIDDEN = 8,
    /**
     * @generated from protobuf enum value: OP_STOP_REGISTER = 10;
     */
    OP_STOP_REGISTER = 10,
    /**
     * @generated from protobuf enum value: OP_STOP_SERVER = 11;
     */
    OP_STOP_SERVER = 11,
    /**
     * @generated from protobuf enum value: OP_ACCOUNT_VEIRFY_ERROR = 12;
     */
    OP_ACCOUNT_VEIRFY_ERROR = 12,
    /**
     * @generated from protobuf enum value: OP_ACCOUNT_FREEZE = 13;
     */
    OP_ACCOUNT_FREEZE = 13,
    /**
     * @generated from protobuf enum value: OP_REPEAT_LOGIN = 14;
     */
    OP_REPEAT_LOGIN = 14,
    /**
     * @generated from protobuf enum value: OP_CLIENT_VERSION_ERROR = 15;
     */
    OP_CLIENT_VERSION_ERROR = 15,
    /**
     * @generated from protobuf enum value: OP_TOKEN_ERROR = 16;
     */
    OP_TOKEN_ERROR = 16,
    /**
     * @generated from protobuf enum value: OP_ACCOUNT_NOT_EXIST = 17;
     */
    OP_ACCOUNT_NOT_EXIST = 17,
    /**
     * @generated from protobuf enum value: OP_WAIT_OTHER_LOGIN = 18;
     */
    OP_WAIT_OTHER_LOGIN = 18,
    /**
     * @generated from protobuf enum value: OP_ANOTHER_LOGIN = 19;
     */
    OP_ANOTHER_LOGIN = 19,
    /**
     * @generated from protobuf enum value: OP_CLIENT_FORCE_UPDATE = 20;
     */
    OP_CLIENT_FORCE_UPDATE = 20,
    /**
     * @generated from protobuf enum value: OP_BLACK_UID = 21;
     */
    OP_BLACK_UID = 21,
    /**
     * @generated from protobuf enum value: OP_LOGIN_DB_FAIL = 22;
     */
    OP_LOGIN_DB_FAIL = 22,
    /**
     * @generated from protobuf enum value: OP_LOGIN_INIT_FAIL = 23;
     */
    OP_LOGIN_INIT_FAIL = 23,
    /**
     * @generated from protobuf enum value: OP_MYSQL_DUPLICATE = 24;
     */
    OP_MYSQL_DUPLICATE = 24,
    /**
     * @generated from protobuf enum value: OP_MAX_PLAYER = 25;
     */
    OP_MAX_PLAYER = 25,
    /**
     * @generated from protobuf enum value: OP_ANTI_ADDICT = 26;
     */
    OP_ANTI_ADDICT = 26,
    /**
     * @generated from protobuf enum value: OP_PS_PLAYER_WITHOUT_ONLINE_ID = 27;
     */
    OP_PS_PLAYER_WITHOUT_ONLINE_ID = 27,
    /**
     * @generated from protobuf enum value: OP_ONLINE_ID_NOT_FOUND = 28;
     */
    OP_ONLINE_ID_NOT_FOUND = 28,
    /**
     * @generated from protobuf enum value: OP_ONLNE_ID_NOT_MATCH = 29;
     */
    OP_ONLNE_ID_NOT_MATCH = 29,
    /**
     * @generated from protobuf enum value: OP_REGISTER_IS_FULL = 30;
     */
    OP_REGISTER_IS_FULL = 30,
    /**
     * @generated from protobuf enum value: OP_CHECKSUM_INVALID = 31;
     */
    OP_CHECKSUM_INVALID = 31,
    /**
     * @generated from protobuf enum value: OP_BLACK_REGISTER_IP = 32;
     */
    OP_BLACK_REGISTER_IP = 32,
    /**
     * @generated from protobuf enum value: OP_EXCEED_REGISTER_RATE = 33;
     */
    OP_EXCEED_REGISTER_RATE = 33,
    /**
     * @generated from protobuf enum value: OP_UNKNOWN_PLATFORM = 34;
     */
    OP_UNKNOWN_PLATFORM = 34,
    /**
     * @generated from protobuf enum value: OP_TOKEN_PARAM_ERROR = 35;
     */
    OP_TOKEN_PARAM_ERROR = 35,
    /**
     * @generated from protobuf enum value: OP_ANTI_OFFLINE_ERROR = 36;
     */
    OP_ANTI_OFFLINE_ERROR = 36,
    /**
     * @generated from protobuf enum value: OP_BLACK_LOGIN_IP = 37;
     */
    OP_BLACK_LOGIN_IP = 37,
    /**
     * @generated from protobuf enum value: OP_GET_TOKEN_SESSION_HAS_UID = 38;
     */
    OP_GET_TOKEN_SESSION_HAS_UID = 38,
    /**
     * @generated from protobuf enum value: OP_ENVIRONMENT_ERROR = 39;
     */
    OP_ENVIRONMENT_ERROR = 39,
    /**
     * @generated from protobuf enum value: OP_CHECK_CLIENT_VERSION_HASH_FAIL = 40;
     */
    OP_CHECK_CLIENT_VERSION_HASH_FAIL = 40,
    /**
     * @generated from protobuf enum value: OP_MINOR_REGISTER_FOBIDDEN = 41;
     */
    OP_MINOR_REGISTER_FOBIDDEN = 41,
    /**
     * @generated from protobuf enum value: OP_SECURITY_LIBRARY_ERROR = 42;
     */
    OP_SECURITY_LIBRARY_ERROR = 42
}
declare class GetDbGateOperationalDataReq$Type extends MessageType<GetDbGateOperationalDataReq> {
    constructor();
    create(value?: PartialMessage<GetDbGateOperationalDataReq>): GetDbGateOperationalDataReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetDbGateOperationalDataReq): GetDbGateOperationalDataReq;
    internalBinaryWrite(message: GetDbGateOperationalDataReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetDbGateOperationalDataReq
 */
export declare const GetDbGateOperationalDataReq: GetDbGateOperationalDataReq$Type;
declare class GetDbGateOperationalDataRsp$Type extends MessageType<GetDbGateOperationalDataRsp> {
    constructor();
    create(value?: PartialMessage<GetDbGateOperationalDataRsp>): GetDbGateOperationalDataRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetDbGateOperationalDataRsp): GetDbGateOperationalDataRsp;
    internalBinaryWrite(message: GetDbGateOperationalDataRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetDbGateOperationalDataRsp
 */
export declare const GetDbGateOperationalDataRsp: GetDbGateOperationalDataRsp$Type;
declare class InitializeConnectionReq$Type extends MessageType<InitializeConnectionReq> {
    constructor();
    create(value?: PartialMessage<InitializeConnectionReq>): InitializeConnectionReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InitializeConnectionReq): InitializeConnectionReq;
    internalBinaryWrite(message: InitializeConnectionReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.InitializeConnectionReq
 */
export declare const InitializeConnectionReq: InitializeConnectionReq$Type;
declare class InitializeConnectionRsp$Type extends MessageType<InitializeConnectionRsp> {
    constructor();
    create(value?: PartialMessage<InitializeConnectionRsp>): InitializeConnectionRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InitializeConnectionRsp): InitializeConnectionRsp;
    internalBinaryWrite(message: InitializeConnectionRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.InitializeConnectionRsp
 */
export declare const InitializeConnectionRsp: InitializeConnectionRsp$Type;
declare class ServicePingAckReq$Type extends MessageType<ServicePingAckReq> {
    constructor();
    create(value?: PartialMessage<ServicePingAckReq>): ServicePingAckReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ServicePingAckReq): ServicePingAckReq;
    internalBinaryWrite(message: ServicePingAckReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.ServicePingAckReq
 */
export declare const ServicePingAckReq: ServicePingAckReq$Type;
declare class ServicePingAckRsp$Type extends MessageType<ServicePingAckRsp> {
    constructor();
    create(value?: PartialMessage<ServicePingAckRsp>): ServicePingAckRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ServicePingAckRsp): ServicePingAckRsp;
    internalBinaryWrite(message: ServicePingAckRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.ServicePingAckRsp
 */
export declare const ServicePingAckRsp: ServicePingAckRsp$Type;
declare class ServiceHeartBeatNotify$Type extends MessageType<ServiceHeartBeatNotify> {
    constructor();
    create(value?: PartialMessage<ServiceHeartBeatNotify>): ServiceHeartBeatNotify;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ServiceHeartBeatNotify): ServiceHeartBeatNotify;
    internalBinaryWrite(message: ServiceHeartBeatNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.ServiceHeartBeatNotify
 */
export declare const ServiceHeartBeatNotify: ServiceHeartBeatNotify$Type;
declare class GetSessionDataReq$Type extends MessageType<GetSessionDataReq> {
    constructor();
    create(value?: PartialMessage<GetSessionDataReq>): GetSessionDataReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSessionDataReq): GetSessionDataReq;
    internalBinaryWrite(message: GetSessionDataReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetSessionDataReq
 */
export declare const GetSessionDataReq: GetSessionDataReq$Type;
declare class GetSessionDataRsp$Type extends MessageType<GetSessionDataRsp> {
    constructor();
    create(value?: PartialMessage<GetSessionDataRsp>): GetSessionDataRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSessionDataRsp): GetSessionDataRsp;
    internalBinaryWrite(message: GetSessionDataRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetSessionDataRsp
 */
export declare const GetSessionDataRsp: GetSessionDataRsp$Type;
declare class UpdateSessionDataReq$Type extends MessageType<UpdateSessionDataReq> {
    constructor();
    create(value?: PartialMessage<UpdateSessionDataReq>): UpdateSessionDataReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateSessionDataReq): UpdateSessionDataReq;
    internalBinaryWrite(message: UpdateSessionDataReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdateSessionDataReq
 */
export declare const UpdateSessionDataReq: UpdateSessionDataReq$Type;
declare class UpdateSessionDataRsp$Type extends MessageType<UpdateSessionDataRsp> {
    constructor();
    create(value?: PartialMessage<UpdateSessionDataRsp>): UpdateSessionDataRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateSessionDataRsp): UpdateSessionDataRsp;
    internalBinaryWrite(message: UpdateSessionDataRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdateSessionDataRsp
 */
export declare const UpdateSessionDataRsp: UpdateSessionDataRsp$Type;
declare class GetAccountDataReq$Type extends MessageType<GetAccountDataReq> {
    constructor();
    create(value?: PartialMessage<GetAccountDataReq>): GetAccountDataReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAccountDataReq): GetAccountDataReq;
    internalBinaryWrite(message: GetAccountDataReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetAccountDataReq
 */
export declare const GetAccountDataReq: GetAccountDataReq$Type;
declare class GetAccountDataRsp$Type extends MessageType<GetAccountDataRsp> {
    constructor();
    create(value?: PartialMessage<GetAccountDataRsp>): GetAccountDataRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAccountDataRsp): GetAccountDataRsp;
    internalBinaryWrite(message: GetAccountDataRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetAccountDataRsp
 */
export declare const GetAccountDataRsp: GetAccountDataRsp$Type;
declare class UpdateAccountDataReq$Type extends MessageType<UpdateAccountDataReq> {
    constructor();
    create(value?: PartialMessage<UpdateAccountDataReq>): UpdateAccountDataReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateAccountDataReq): UpdateAccountDataReq;
    internalBinaryWrite(message: UpdateAccountDataReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdateAccountDataReq
 */
export declare const UpdateAccountDataReq: UpdateAccountDataReq$Type;
declare class UpdateAccountDataRsp$Type extends MessageType<UpdateAccountDataRsp> {
    constructor();
    create(value?: PartialMessage<UpdateAccountDataRsp>): UpdateAccountDataRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateAccountDataRsp): UpdateAccountDataRsp;
    internalBinaryWrite(message: UpdateAccountDataRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdateAccountDataRsp
 */
export declare const UpdateAccountDataRsp: UpdateAccountDataRsp$Type;
declare class GetPlayerDataReq$Type extends MessageType<GetPlayerDataReq> {
    constructor();
    create(value?: PartialMessage<GetPlayerDataReq>): GetPlayerDataReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPlayerDataReq): GetPlayerDataReq;
    internalBinaryWrite(message: GetPlayerDataReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetPlayerDataReq
 */
export declare const GetPlayerDataReq: GetPlayerDataReq$Type;
declare class GetPlayerDataRsp$Type extends MessageType<GetPlayerDataRsp> {
    constructor();
    create(value?: PartialMessage<GetPlayerDataRsp>): GetPlayerDataRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPlayerDataRsp): GetPlayerDataRsp;
    internalBinaryWrite(message: GetPlayerDataRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetPlayerDataRsp
 */
export declare const GetPlayerDataRsp: GetPlayerDataRsp$Type;
declare class UpdatePlayerDataReq$Type extends MessageType<UpdatePlayerDataReq> {
    constructor();
    create(value?: PartialMessage<UpdatePlayerDataReq>): UpdatePlayerDataReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdatePlayerDataReq): UpdatePlayerDataReq;
    internalBinaryWrite(message: UpdatePlayerDataReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdatePlayerDataReq
 */
export declare const UpdatePlayerDataReq: UpdatePlayerDataReq$Type;
declare class UpdatePlayerDataRsp$Type extends MessageType<UpdatePlayerDataRsp> {
    constructor();
    create(value?: PartialMessage<UpdatePlayerDataRsp>): UpdatePlayerDataRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdatePlayerDataRsp): UpdatePlayerDataRsp;
    internalBinaryWrite(message: UpdatePlayerDataRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdatePlayerDataRsp
 */
export declare const UpdatePlayerDataRsp: UpdatePlayerDataRsp$Type;
declare class GetPlayerMailCollectionReq$Type extends MessageType<GetPlayerMailCollectionReq> {
    constructor();
    create(value?: PartialMessage<GetPlayerMailCollectionReq>): GetPlayerMailCollectionReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPlayerMailCollectionReq): GetPlayerMailCollectionReq;
    internalBinaryWrite(message: GetPlayerMailCollectionReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetPlayerMailCollectionReq
 */
export declare const GetPlayerMailCollectionReq: GetPlayerMailCollectionReq$Type;
declare class GetPlayerMailCollectionRsp$Type extends MessageType<GetPlayerMailCollectionRsp> {
    constructor();
    create(value?: PartialMessage<GetPlayerMailCollectionRsp>): GetPlayerMailCollectionRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPlayerMailCollectionRsp): GetPlayerMailCollectionRsp;
    internalBinaryWrite(message: GetPlayerMailCollectionRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetPlayerMailCollectionRsp
 */
export declare const GetPlayerMailCollectionRsp: GetPlayerMailCollectionRsp$Type;
declare class UpdatePlayerMailCollectionReq$Type extends MessageType<UpdatePlayerMailCollectionReq> {
    constructor();
    create(value?: PartialMessage<UpdatePlayerMailCollectionReq>): UpdatePlayerMailCollectionReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdatePlayerMailCollectionReq): UpdatePlayerMailCollectionReq;
    internalBinaryWrite(message: UpdatePlayerMailCollectionReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdatePlayerMailCollectionReq
 */
export declare const UpdatePlayerMailCollectionReq: UpdatePlayerMailCollectionReq$Type;
declare class UpdatePlayerMailCollectionRsp$Type extends MessageType<UpdatePlayerMailCollectionRsp> {
    constructor();
    create(value?: PartialMessage<UpdatePlayerMailCollectionRsp>): UpdatePlayerMailCollectionRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdatePlayerMailCollectionRsp): UpdatePlayerMailCollectionRsp;
    internalBinaryWrite(message: UpdatePlayerMailCollectionRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdatePlayerMailCollectionRsp
 */
export declare const UpdatePlayerMailCollectionRsp: UpdatePlayerMailCollectionRsp$Type;
declare class GetPlayerAvatarCollectionReq$Type extends MessageType<GetPlayerAvatarCollectionReq> {
    constructor();
    create(value?: PartialMessage<GetPlayerAvatarCollectionReq>): GetPlayerAvatarCollectionReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPlayerAvatarCollectionReq): GetPlayerAvatarCollectionReq;
    internalBinaryWrite(message: GetPlayerAvatarCollectionReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetPlayerAvatarCollectionReq
 */
export declare const GetPlayerAvatarCollectionReq: GetPlayerAvatarCollectionReq$Type;
declare class GetPlayerAvatarCollectionRsp$Type extends MessageType<GetPlayerAvatarCollectionRsp> {
    constructor();
    create(value?: PartialMessage<GetPlayerAvatarCollectionRsp>): GetPlayerAvatarCollectionRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetPlayerAvatarCollectionRsp): GetPlayerAvatarCollectionRsp;
    internalBinaryWrite(message: GetPlayerAvatarCollectionRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.GetPlayerAvatarCollectionRsp
 */
export declare const GetPlayerAvatarCollectionRsp: GetPlayerAvatarCollectionRsp$Type;
declare class UpdateAvatarDataCollectionReq$Type extends MessageType<UpdateAvatarDataCollectionReq> {
    constructor();
    create(value?: PartialMessage<UpdateAvatarDataCollectionReq>): UpdateAvatarDataCollectionReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateAvatarDataCollectionReq): UpdateAvatarDataCollectionReq;
    internalBinaryWrite(message: UpdateAvatarDataCollectionReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdateAvatarDataCollectionReq
 */
export declare const UpdateAvatarDataCollectionReq: UpdateAvatarDataCollectionReq$Type;
declare class UpdateAvatarDataCollectionRsp$Type extends MessageType<UpdateAvatarDataCollectionRsp> {
    constructor();
    create(value?: PartialMessage<UpdateAvatarDataCollectionRsp>): UpdateAvatarDataCollectionRsp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateAvatarDataCollectionRsp): UpdateAvatarDataCollectionRsp;
    internalBinaryWrite(message: UpdateAvatarDataCollectionRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.UpdateAvatarDataCollectionRsp
 */
export declare const UpdateAvatarDataCollectionRsp: UpdateAvatarDataCollectionRsp$Type;
declare class CommandExceptionNotify$Type extends MessageType<CommandExceptionNotify> {
    constructor();
    create(value?: PartialMessage<CommandExceptionNotify>): CommandExceptionNotify;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommandExceptionNotify): CommandExceptionNotify;
    internalBinaryWrite(message: CommandExceptionNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.CommandExceptionNotify
 */
export declare const CommandExceptionNotify: CommandExceptionNotify$Type;
declare class Player$Type extends MessageType<Player> {
    constructor();
    create(value?: PartialMessage<Player>): Player;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Player): Player;
    private binaryReadMap5;
    internalBinaryWrite(message: Player, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.Player
 */
export declare const Player: Player$Type;
declare class Account$Type extends MessageType<Account> {
    constructor();
    create(value?: PartialMessage<Account>): Account;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Account): Account;
    internalBinaryWrite(message: Account, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.Account
 */
export declare const Account: Account$Type;
declare class Session$Type extends MessageType<Session> {
    constructor();
    create(value?: PartialMessage<Session>): Session;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Session): Session;
    internalBinaryWrite(message: Session, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.Session
 */
export declare const Session: Session$Type;
declare class PlayerProfilePicture$Type extends MessageType<PlayerProfilePicture> {
    constructor();
    create(value?: PartialMessage<PlayerProfilePicture>): PlayerProfilePicture;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerProfilePicture): PlayerProfilePicture;
    internalBinaryWrite(message: PlayerProfilePicture, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.PlayerProfilePicture
 */
export declare const PlayerProfilePicture: PlayerProfilePicture$Type;
declare class PlayerBirthday$Type extends MessageType<PlayerBirthday> {
    constructor();
    create(value?: PartialMessage<PlayerBirthday>): PlayerBirthday;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerBirthday): PlayerBirthday;
    internalBinaryWrite(message: PlayerBirthday, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.PlayerBirthday
 */
export declare const PlayerBirthday: PlayerBirthday$Type;
declare class PingTransaction$Type extends MessageType<PingTransaction> {
    constructor();
    create(value?: PartialMessage<PingTransaction>): PingTransaction;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PingTransaction): PingTransaction;
    internalBinaryWrite(message: PingTransaction, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.PingTransaction
 */
export declare const PingTransaction: PingTransaction$Type;
declare class ServiceBasicInfo$Type extends MessageType<ServiceBasicInfo> {
    constructor();
    create(value?: PartialMessage<ServiceBasicInfo>): ServiceBasicInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ServiceBasicInfo): ServiceBasicInfo;
    internalBinaryWrite(message: ServiceBasicInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.ServiceBasicInfo
 */
export declare const ServiceBasicInfo: ServiceBasicInfo$Type;
declare class OperationalData$Type extends MessageType<OperationalData> {
    constructor();
    create(value?: PartialMessage<OperationalData>): OperationalData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OperationalData): OperationalData;
    internalBinaryWrite(message: OperationalData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message com.yonakaps.package.OperationalData
 */
export declare const OperationalData: OperationalData$Type;
export {};
