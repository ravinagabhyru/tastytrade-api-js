import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { SessionData, SessionResponse } from "../types/session.js";

export default class SessionService {
    constructor(public httpClient: TastytradeHttpClient) {
    }

    // Sessions: Allows an API client to interact with their session, or create a new one.
    async login(usernameOrEmail: string, password: string, rememberMe = false): Promise<SessionData> {
        // Create a new user session.
        const params = { login: usernameOrEmail, password, rememberMe }
        const response = await this.httpClient.postData('/sessions', params, {})
        const sessionData = extractResponseData<SessionResponse>(response).data
        this.httpClient.session.authToken = sessionData["session-token"]
        return sessionData
    }

    async loginWithRememberToken(usernameOrEmail: string, rememberToken: string, rememberMe = false): Promise<SessionData> {
        // Creates a session using the remember token.
        const params = { login: usernameOrEmail, rememberToken, rememberMe }
        const sessionData = extractResponseData<SessionResponse>(await this.httpClient.postData('/sessions', params, {})).data
        this.httpClient.session.authToken = sessionData["session-token"]
        return sessionData
    }

    // Ravi - I don't see validate api endpoint in the docs, though it returns data, 
    // probably a left over from earlier version
    // async validate(): Promise<SessionData> {
    //     const response = await this.httpClient.postData('/sessions/validate', {}, {});
    //     return extractResponseData<SessionResponse>(response).data;
    // }

    async logout() {
        const response = await this.httpClient.deleteData('/sessions', {});
        this.httpClient.session.clear()
        // delete a session does not return any data, it returns '204 No Content'
        return response.status;
    }
}