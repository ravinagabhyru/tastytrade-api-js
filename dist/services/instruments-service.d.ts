import type { Cryptocurrency, ActiveEquity, EquityDefinition, EquityOption, Future, FutureOptionProduct, FutureOption, FutureProduct, QuantityDecimalPrecision, Warrant, NestedFutureOptionChain, FutureOptionChain, NestedOptionChain, CompactOptionChain, OptionChain } from "../types/instruments.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
export default class InstrumentsService {
    private httpClient;
    constructor(httpClient: TastytradeHttpClient);
    getCryptocurrencies(symbols?: string[]): Promise<Cryptocurrency[]>;
    getSingleCryptocurrency(symbol: string): Promise<Cryptocurrency>;
    getActiveEquities(queryParams?: {}): Promise<ActiveEquity[]>;
    getEquityDefinitions(queryParams?: {}): Promise<EquityDefinition[]>;
    getSingleEquity(symbol: string): Promise<EquityDefinition>;
    getEquityOptions(symbols: string[], active?: boolean, withExpired?: boolean): Promise<EquityOption[]>;
    getSingleEquityOption(symbol: string, queryParams?: {}): Promise<EquityOption>;
    getFutures(queryParams?: {}): Promise<Future[]>;
    getSingleFuture(symbol: string): Promise<Future>;
    getFutureOptionsProducts(): Promise<FutureOptionProduct[]>;
    getSingleFutureOptionProduct(exchange: string, rootSymbol: string): Promise<FutureOptionProduct>;
    getFutureOptions(queryParams?: {}): Promise<FutureOption[]>;
    getSingleFutureOption(symbol: string): Promise<FutureOption>;
    getFuturesProducts(): Promise<FutureProduct[]>;
    getSingleFutureProduct(exchange: string, code: string): Promise<FutureProduct>;
    getQuantityDecimalPrecisions(): Promise<QuantityDecimalPrecision[]>;
    getWarrants(queryParams?: {}): Promise<Warrant[]>;
    getSingleWarrant(symbol: string): Promise<Warrant>;
    getNestedFutureOptionChains(symbol: string): Promise<NestedFutureOptionChain>;
    getFutureOptionChain(symbol: string): Promise<FutureOptionChain>;
    getNestedOptionChain(symbol: string): Promise<NestedOptionChain>;
    getCompactOptionChain(symbol: string): Promise<CompactOptionChain>;
    getOptionChain(symbol: string): Promise<OptionChain>;
}
//# sourceMappingURL=instruments-service.d.ts.map