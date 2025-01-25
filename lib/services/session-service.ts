import type { SessionResponse, SessionData, LoginRequest, RememberMeLoginRequest } from "../types/session.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
import extractResponseData from "../utils/response-util.js";

/**
 * Service for managing user sessions with the tastytrade API.
 * Handles login, logout, and remember token functionality.
 */
export default class SessionService {
    private sessionData?: SessionData;

    constructor(private httpClient: TastytradeHttpClient) {}

    /**
     * Create a new session (login) with username/password
     * @param login Username or email
     * @param password User password
     * @param rememberMe Generate a remember token for future logins
     */
    async login(login: string, password: string, rememberMe = false): Promise<SessionData> {
        const loginRequest: LoginRequest = {
            'login': login,
            'password': password,
            'remember-me': rememberMe
        };

        const response = await this.httpClient.postData('/sessions', loginRequest, {}) as SessionResponse;
        this.sessionData = extractResponseData<SessionResponse>(response).data;

        // Set the session token for future requests
        if (this.sessionData['session-token']) {
            this.httpClient.session.authToken = this.sessionData['session-token'];
        }

        return this.sessionData;
    }

    /**
     * Create a new session using a remember token from previous login
     * @param login Username or email
     * @param rememberToken One-time use token from previous login
     * @param rememberMe Generate new remember token
     */
    async loginWithRememberToken(login: string, rememberToken: string, rememberMe = false): Promise<SessionData> {
        const loginRequest: RememberMeLoginRequest = {
            'login': login,
            'remember-token': rememberToken,
            'remember-me': rememberMe
        };

        const response = await this.httpClient.postData('/sessions', loginRequest, {}) as SessionResponse;
        this.sessionData = extractResponseData<SessionResponse>(response).data;

        // Set the session token for future requests
        if (this.sessionData['session-token']) {
            this.httpClient.session.authToken = this.sessionData['session-token'];
        }

        return this.sessionData;
    }

    /**
     * Destroy the current session (logout)
     */
    async logout(): Promise<void> {
        if (!this.sessionData && !this.httpClient.session.isValid) {
            return;
        }

        await this.httpClient.deleteData('/sessions', {});
        this.sessionData = undefined;
        this.httpClient.session.clear();
    }

    /**
     * Get the current session data
     */
    getSessionData(): SessionData | undefined {
        return this.sessionData;
    }

    /**
     * Check if there is an active session
     */
    isAuthenticated(): boolean {
        return !!this.sessionData;
    }

    /**
     * Get the current session token
     */
    getSessionToken(): string | undefined {
        return this.sessionData?.['session-token'];
    }

    /**
     * Get the remember token if one was generated
     */
    getRememberToken(): string | undefined {
        return this.sessionData?.['remember-token'];
    }
}
