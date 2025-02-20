import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
export default class SymbolSearchService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    //Default
    async getSymbolData(symbol) {
        //Returns an array of symbol data.
        const symbolData = await this.httpClient.getData(`/symbols/search/${symbol}`, {}, {});
        return extractResponseData(symbolData).data.items;
    }
}
//# sourceMappingURL=symbol-search-service.js.map