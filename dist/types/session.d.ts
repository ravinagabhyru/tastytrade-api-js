/**
 * Session data from API response when creating a new session.
 * Session tokens are valid for 24 hours or until invalidated via DELETE /sessions.
 */
export interface SessionData {
    'user': {
        'email': string;
        'username': string;
        'external-id': string;
    };
    'session-token': string;
    'remember-token'?: string;
    'session-expiration': string;
}
export interface SessionResponse {
    data: SessionData;
    context: string;
}
/**
 * Parameters for creating a new session
 */
export interface LoginRequest {
    'login': string;
    'password': string;
    'remember-me'?: boolean;
}
/**
 * Parameters for creating a session with remember token
 */
export interface RememberMeLoginRequest {
    'login': string;
    'remember-token': string;
    'remember-me'?: boolean;
}
export type AuthorizationHeader = string;
//# sourceMappingURL=session.d.ts.map