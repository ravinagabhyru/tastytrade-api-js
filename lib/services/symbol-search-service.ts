import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { SymbolData, SymbolSearchResponse } from "../types/symbol-search.js";

export default class SymbolSearchService {
    constructor(private httpClient: TastytradeHttpClient) {
    }
    
    //Default
    async getSymbolData(symbol: string): Promise<SymbolData[]> {
        //Returns an array of symbol data.
        const symbolData = await this.httpClient.getData(`/symbols/search/${symbol}`, {}, {});
        return extractResponseData<SymbolSearchResponse>(symbolData).data.items;
    }
}
