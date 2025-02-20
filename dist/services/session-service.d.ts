import type { SessionData } from "../types/session.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
/**
 * Service for managing user sessions with the tastytrade API.
 * Handles login, logout, and remember token functionality.
 */
export default class SessionService {
    private httpClient;
    private sessionData?;
    constructor(httpClient: TastytradeHttpClient);
    /**
     * Create a new session (login) with username/password
     * @param login Username or email
     * @param password User password
     * @param rememberMe Generate a remember token for future logins
     */
    login(login: string, password: string, rememberMe?: boolean): Promise<SessionData>;
    /**
     * Create a new session using a remember token from previous login
     * @param login Username or email
     * @param rememberToken One-time use token from previous login
     * @param rememberMe Generate new remember token
     */
    loginWithRememberToken(login: string, rememberToken: string, rememberMe?: boolean): Promise<SessionData>;
    /**
     * Destroy the current session (logout)
     */
    logout(): Promise<void>;
    /**
     * Get the current session data
     */
    getSessionData(): SessionData | undefined;
    /**
     * Check if there is an active session
     */
    isAuthenticated(): boolean;
    /**
     * Get the current session token
     */
    getSessionToken(): string | undefined;
    /**
     * Get the remember token if one was generated
     */
    getRememberToken(): string | undefined;
}
//# sourceMappingURL=session-service.d.ts.map