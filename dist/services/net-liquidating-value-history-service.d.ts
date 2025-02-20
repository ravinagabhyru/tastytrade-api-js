import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { NetLiquidatingValueSnapshot, CurrentNetLiquidatingValue } from "../types/net-liquidating-value-history.js";
export default class NetLiquidatingValueHistoryService {
    private httpClient;
    constructor(httpClient: TastytradeHttpClient);
    getNetLiquidatingValueHistory(accountNumber: string, queryParams?: {}): Promise<NetLiquidatingValueSnapshot[]>;
    getNetLiquidatingValue(accountNumber: string): Promise<CurrentNetLiquidatingValue>;
}
//# sourceMappingURL=net-liquidating-value-history-service.d.ts.map