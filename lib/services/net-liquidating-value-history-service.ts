import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { NetLiquidatingValueSnapshot, NetLiquidatingValueHistoryResponse, CurrentNetLiquidatingValue, CurrentNetLiquidatingValueResponse } from "../types/net-liquidating-value-history.js";

export default class NetLiquidatingValueHistoryService {
    constructor(private httpClient: TastytradeHttpClient) {
    }

    //Default
    async getNetLiquidatingValueHistory(accountNumber: string, queryParams = {}): Promise<NetLiquidatingValueSnapshot[]> {
        //Returns a list of account net liquidating value snapshots.
        const netLiquidatingValueHistory = await this.httpClient.getData(`/accounts/${accountNumber}/net-liq/history`, {}, queryParams);
        return extractResponseData<NetLiquidatingValueHistoryResponse>(netLiquidatingValueHistory).data.items;
    }

    async getNetLiquidatingValue(accountNumber: string): Promise<CurrentNetLiquidatingValue> {
        //Returns current net liquidating value.
        const netLiquidatingValue = await this.httpClient.getData(`/accounts/${accountNumber}/net-liq`);
        return extractResponseData<CurrentNetLiquidatingValueResponse>(netLiquidatingValue).data.item;
    }
}
