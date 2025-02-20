import type { JsonValue } from './utils/json-util.js';
import { JsonBuilder } from './utils/json-util.js';
import TastytradeSession from './models/tastytrade-session.js';
import type Logger from './logger.js';
export declare enum STREAMER_STATE {
    Open = 0,
    Closed = 1,
    Error = 2
}
export type Disposer = () => void;
export type StreamerStateObserver = (streamerState: STREAMER_STATE) => void;
export type StreamerMessageObserver = (json: object) => void;
export declare class AccountStreamer {
    private readonly url;
    private readonly session;
    private readonly logger;
    private websocket;
    private startResolve;
    private startReject;
    private requestCounter;
    private queued;
    private heartbeatTimerId;
    lastCloseEvent: any;
    lastErrorEvent: any;
    private _streamerState;
    private readonly streamerStateObservers;
    private readonly streamerMessageObservers;
    private startPromise;
    private readonly requestPromises;
    /**
     *
     * @param url Url of the account streamer service
     */
    constructor(url: string, session: TastytradeSession, logger: Logger);
    get streamerState(): STREAMER_STATE;
    set streamerState(streamerState: STREAMER_STATE);
    private get authToken();
    /**
     * Adds a custom callback that fires when the streamer state changes
     * @param observer
     * @returns
     */
    addStreamerStateObserver(observer: StreamerStateObserver): Disposer;
    get isOpen(): boolean;
    get isClosed(): boolean;
    get isError(): boolean;
    /**
     * Entrypoint for beginning a websocket session
     * You must have a valid tastytrade authToken before calling this method
     * @returns Promise that resolves when the "opened" message is received (see handleOpen)
     */
    start(): Promise<boolean>;
    stop(): void;
    private teardown;
    readonly sendHeartbeat: () => void;
    private scheduleHeartbeatTimer;
    get isHeartbeatScheduled(): boolean;
    private cancelHeartbeatTimer;
    private clearHeartbeatTimerId;
    /**
     * Send a message via websocket
     * @param json JsonBuilder
     * @param includeSessionToken Attaches session token to message if true
     * @returns
     */
    send(json: JsonBuilder, includeSessionToken?: boolean): number;
    /**
     * Used by other methods to send a specific `action` message
     * @param action
     * @param value
     * @returns
     */
    subscribeTo(action: string, value?: JsonValue): number;
    /**
     * Subscribes to all user-level messages for given user external id
     * @param userExternalId "external-id" from login response
     * @returns Promise that resolves when ack is received
     */
    subscribeToUser(userExternalId: string): void;
    /**
     * Subscribes to all account-level messages for given account numbers
     * @param accountNumbers List of account numbers to subscribe to
     * @returns Promise that resolves when an ack is received
     */
    subscribeToAccounts(accountNumbers: string[]): Promise<string>;
    private sendQueuedMessages;
    private readonly handleOpen;
    private readonly handleClose;
    private readonly handleError;
    private readonly handleMessage;
    addMessageObserver(observer: StreamerMessageObserver): Disposer;
    private readonly handleOneMessage;
}
//# sourceMappingURL=account-streamer.d.ts.map