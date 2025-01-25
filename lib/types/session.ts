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
    'remember-token'?: string;  // Only present if remember-me: true in request
    'session-expiration': string;  // ISO datetime
}

export interface SessionResponse {
    data: SessionData;
    context: string;
}

/**
 * Parameters for creating a new session
 */
export interface LoginRequest {
    'login': string;      // Username or Email
    'password': string;
    'remember-me'?: boolean;  // Generates a remember token if true
}

/**
 * Parameters for creating a session with remember token
 */
export interface RememberMeLoginRequest {
    'login': string;           // Username or Email
    'remember-token': string;  // One-time use token, expires after 28 days if not used
    'remember-me'?: boolean;   // Generate new remember token
}

// Helper type for effects
export type AuthorizationHeader = string;  // Session token with no 'Bearer' prefix