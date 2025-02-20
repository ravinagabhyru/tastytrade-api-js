import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { SymbolData } from "../types/symbol-search.js";
export default class SymbolSearchService {
    private httpClient;
    constructor(httpClient: TastytradeHttpClient);
    getSymbolData(symbol: string): Promise<SymbolData[]>;
}
//# sourceMappingURL=symbol-search-service.d.ts.map