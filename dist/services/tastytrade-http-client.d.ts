import TastytradeSession from "../models/tastytrade-session.js";
import type Logger from "../logger.js";
export default class TastytradeHttpClient {
    private readonly baseUrl;
    private readonly logger?;
    readonly session: TastytradeSession;
    constructor(baseUrl: string, logger?: Logger);
    private getDefaultHeaders;
    private executeRequest;
    getData(url: string, headers?: object, queryParams?: object): Promise<any>;
    postData(url: string, data: object, headers: object): Promise<any>;
    putData(url: string, data: object, headers: object): Promise<any>;
    patchData(url: string, data: object, headers: object): Promise<any>;
    deleteData(url: string, headers: object): Promise<any>;
}
//# sourceMappingURL=tastytrade-http-client.d.ts.map