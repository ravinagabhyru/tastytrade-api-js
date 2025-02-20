import WebSocket from 'isomorphic-ws';
import _ from 'lodash';
import { JsonBuilder } from './utils/json-util.js';
import TastytradeSession from './models/tastytrade-session.js';
import { MinTlsVersion } from './utils/constants.js';
export var STREAMER_STATE;
(function (STREAMER_STATE) {
    STREAMER_STATE[STREAMER_STATE["Open"] = 0] = "Open";
    STREAMER_STATE[STREAMER_STATE["Closed"] = 1] = "Closed";
    STREAMER_STATE[STREAMER_STATE["Error"] = 2] = "Error";
})(STREAMER_STATE || (STREAMER_STATE = {}));
var MessageAction;
(function (MessageAction) {
    MessageAction["ACCOUNT_SUBSCRIBE"] = "account-subscribe";
    MessageAction["CONNECT"] = "connect";
    MessageAction["HEARTBEAT"] = "heartbeat";
    MessageAction["PUBLIC_WATCHLISTS_SUBSCRIBE"] = "public-watchlists-subscribe";
    MessageAction["QUOTE_ALERTS_SUBSCRIBE"] = "quote-alerts-subscribe";
    MessageAction["USER_MESSAGE_SUBSCRIBE"] = "user-message-subscribe";
})(MessageAction || (MessageAction = {}));
const HEARTBEAT_INTERVAL = 20000; // 20 seconds
const SOURCE = 'tastytrade-api-js-sdk';
const REQUEST_ID = 'request-id';
function removeElement(array, element) {
    const index = array.indexOf(element);
    if (index < 0) {
        return;
    }
    array.splice(index, 1);
}
export class AccountStreamer {
    /**
     *
     * @param url Url of the account streamer service
     */
    constructor(url, session, logger) {
        this.url = url;
        this.session = session;
        this.websocket = null;
        this.startResolve = null;
        this.startReject = null;
        this.requestCounter = 0;
        this.queued = [];
        this.heartbeatTimerId = null;
        this.lastCloseEvent = null;
        this.lastErrorEvent = null;
        this._streamerState = STREAMER_STATE.Closed;
        this.streamerStateObservers = [];
        this.streamerMessageObservers = [];
        this.startPromise = null;
        this.requestPromises = new Map();
        this.sendHeartbeat = () => {
            this.clearHeartbeatTimerId();
            this.send(new JsonBuilder({ action: MessageAction.HEARTBEAT }));
        };
        this.handleOpen = (_event) => {
            if (this.startResolve === null) {
                return;
            }
            this.logger.info('AccountStreamer opened');
            this.startResolve(true);
            this.startResolve = this.startReject = null;
            this.streamerState = STREAMER_STATE.Open;
            this.sendQueuedMessages();
            this.scheduleHeartbeatTimer();
        };
        this.handleClose = (event) => {
            this.logger.info('AccountStreamer closed');
            if (this.websocket === null) {
                return;
            }
            this.lastCloseEvent = event;
            this.streamerState = STREAMER_STATE.Closed;
            this.teardown();
        };
        this.handleError = (event) => {
            if (this.websocket === null) {
                return;
            }
            this.logger.error('AccountStreamer error', event);
            this.lastErrorEvent = event;
            this.streamerState = STREAMER_STATE.Error;
            if (this.startReject !== null) {
                this.startReject(new Error('Failed to connect'));
                this.startReject = this.startResolve = null;
            }
            this.teardown();
        };
        this.handleMessage = (event) => {
            const json = JSON.parse(event.data);
            if (json.results !== undefined) {
                const results = json.results;
                for (const result of results) {
                    this.handleOneMessage(result);
                }
            }
            else {
                this.handleOneMessage(json);
            }
        };
        this.handleOneMessage = (json) => {
            this.logger.info('Message received: ', json);
            const action = json.action;
            this.streamerMessageObservers.forEach(observer => observer(json));
            if (action) {
                if (action === MessageAction.HEARTBEAT) {
                    // schedule next heartbeat
                    this.scheduleHeartbeatTimer();
                }
                const promiseCallbacks = this.requestPromises.get(json[REQUEST_ID]);
                if (promiseCallbacks) {
                    const [resolve, reject] = promiseCallbacks;
                    const status = json.status;
                    if (status === 'ok') {
                        resolve(json.action);
                    }
                    else {
                        reject(json.message);
                    }
                }
                return;
            }
        };
        this.logger = logger;
    }
    get streamerState() {
        return this._streamerState;
    }
    set streamerState(streamerState) {
        this._streamerState = streamerState;
        this.streamerStateObservers.forEach(observer => {
            observer(streamerState);
        });
    }
    get authToken() {
        return this.session.authToken;
    }
    /**
     * Adds a custom callback that fires when the streamer state changes
     * @param observer
     * @returns
     */
    addStreamerStateObserver(observer) {
        this.streamerStateObservers.push(observer);
        return () => {
            removeElement(this.streamerStateObservers, observer);
        };
    }
    get isOpen() {
        return this.streamerState === STREAMER_STATE.Open;
    }
    get isClosed() {
        return this.streamerState === STREAMER_STATE.Closed;
    }
    get isError() {
        return this.streamerState === STREAMER_STATE.Error;
    }
    /**
     * Entrypoint for beginning a websocket session
     * You must have a valid tastytrade authToken before calling this method
     * @returns Promise that resolves when the "opened" message is received (see handleOpen)
     */
    async start() {
        if (this.startPromise !== null) {
            return this.startPromise;
        }
        this.websocket = new WebSocket(this.url, [], {
            minVersion: MinTlsVersion // TLS Config
        });
        const websocket = this.websocket;
        this.lastCloseEvent = null;
        this.lastErrorEvent = null;
        websocket.addEventListener('open', this.handleOpen);
        websocket.addEventListener('close', this.handleClose);
        websocket.addEventListener('error', this.handleError);
        websocket.addEventListener('message', this.handleMessage);
        this.logger.info('AccountStreamer - starting');
        this.startPromise = new Promise((resolve, reject) => {
            this.startResolve = resolve;
            this.startReject = reject;
        });
        return this.startPromise;
    }
    stop() {
        this.teardown();
    }
    teardown() {
        const websocket = this.websocket;
        if (websocket === null) {
            return;
        }
        this.startPromise = null;
        this.cancelHeartbeatTimer();
        websocket.close();
        websocket.removeEventListener('open', this.handleOpen);
        websocket.removeEventListener('close', this.handleClose);
        websocket.removeEventListener('message', this.handleMessage);
        websocket.removeEventListener('error', this.handleError);
        this.websocket = null;
        this.logger.info('AccountStreamer - teardown');
        this.streamerState = STREAMER_STATE.Closed; // Manually update status for convenience
    }
    scheduleHeartbeatTimer() {
        if (this.isHeartbeatScheduled) {
            // Heartbeat already scheduled
            return;
        }
        this.logger.info('Scheduling heartbeat with interval: ', HEARTBEAT_INTERVAL);
        const scheduler = typeof window === 'undefined' ? setTimeout : window.setTimeout;
        this.heartbeatTimerId = scheduler(this.sendHeartbeat, HEARTBEAT_INTERVAL);
    }
    get isHeartbeatScheduled() {
        return !_.isNil(this.heartbeatTimerId);
    }
    cancelHeartbeatTimer() {
        if (!this.isHeartbeatScheduled) {
            return; // Nothing to cancel
        }
        if (typeof window === 'undefined') {
            clearTimeout(this.heartbeatTimerId);
        }
        else {
            clearTimeout(this.heartbeatTimerId);
        }
        this.clearHeartbeatTimerId();
    }
    clearHeartbeatTimerId() {
        this.heartbeatTimerId = null;
    }
    /**
     * Send a message via websocket
     * @param json JsonBuilder
     * @param includeSessionToken Attaches session token to message if true
     * @returns
     */
    send(json, includeSessionToken = true) {
        this.requestCounter += 1;
        json.add(REQUEST_ID, this.requestCounter);
        json.add('source', SOURCE);
        if (includeSessionToken) {
            const sessionToken = this.authToken;
            if (!sessionToken) {
                throw new Error('sessionToken not set');
            }
            json.add('auth-token', sessionToken);
        }
        const message = JSON.stringify(json.json);
        const websocket = this.websocket;
        if (websocket === null) {
            // Queue up and send on open
            this.queued.push(message);
        }
        else {
            this.logger.info('Sending message: ', message);
            websocket.send(message);
        }
        return this.requestCounter;
    }
    /**
     * Used by other methods to send a specific `action` message
     * @param action
     * @param value
     * @returns
     */
    subscribeTo(action, value) {
        const json = new JsonBuilder();
        json.add('action', action);
        if (!_.isUndefined(value)) {
            json.add('value', value);
        }
        return this.send(json);
    }
    /**
     * Subscribes to all user-level messages for given user external id
     * @param userExternalId "external-id" from login response
     * @returns Promise that resolves when ack is received
     */
    subscribeToUser(userExternalId) {
        if (!userExternalId) {
            return;
        }
        this.subscribeTo(MessageAction.USER_MESSAGE_SUBSCRIBE, userExternalId);
    }
    /**
     * Subscribes to all account-level messages for given account numbers
     * @param accountNumbers List of account numbers to subscribe to
     * @returns Promise that resolves when an ack is received
     */
    async subscribeToAccounts(accountNumbers) {
        if (accountNumbers.length === 0) {
            return Promise.reject('no account numbers');
        }
        const value = accountNumbers.length > 1 ? accountNumbers : accountNumbers[0];
        const requestId = this.subscribeTo(MessageAction.CONNECT, value);
        return new Promise((resolve, reject) => {
            this.requestPromises.set(requestId, [resolve, reject]);
        });
    }
    sendQueuedMessages() {
        const queued = this.queued;
        if (queued.length === 0 || this.websocket === null) {
            return;
        }
        const websocket = this.websocket;
        queued.forEach(msg => {
            websocket.send(msg);
        });
        this.queued = [];
    }
    addMessageObserver(observer) {
        this.streamerMessageObservers.push(observer);
        return () => {
            removeElement(this.streamerMessageObservers, observer);
        };
    }
}
//# sourceMappingURL=account-streamer.js.map