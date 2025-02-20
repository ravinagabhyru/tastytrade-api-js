import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
export default class NetLiquidatingValueHistoryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    //Default
    async getNetLiquidatingValueHistory(accountNumber, queryParams = {}) {
        //Returns a list of account net liquidating value snapshots.
        const netLiquidatingValueHistory = await this.httpClient.getData(`/accounts/${accountNumber}/net-liq/history`, {}, queryParams);
        return extractResponseData(netLiquidatingValueHistory).data.items;
    }
    async getNetLiquidatingValue(accountNumber) {
        //Returns current net liquidating value.
        const netLiquidatingValue = await this.httpClient.getData(`/accounts/${accountNumber}/net-liq`);
        return extractResponseData(netLiquidatingValue).data.item;
    }
}
//# sourceMappingURL=net-liquidating-value-history-service.js.map