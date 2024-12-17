export interface User {
  email: string;
  username: string;
  "external-id": string;
}

export interface SessionData {
  user: User;
  "session-token": string;
  "remember-token": string;
  "session-expiration": string;
}

export interface SessionResponse {
  data: SessionData;
  context: string;
}