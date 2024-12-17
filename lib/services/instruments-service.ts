import type { Cryptocurrency, CryptocurrencyResponse, SingleCryptocurrencyResponse, ActiveEquity, ActiveEquityResponse, EquityDefinition, EquityDefinitionResponse, SingleEquityDefinitionResponse, EquityOption, EquityOptionResponse, SingleEquityOptionResponse, Future, FutureResponse, SingleFutureResponse, FutureOptionProduct, FutureOptionProductResponse, SingleFutureOptionProductResponse, FutureOption, FutureOptionResponse, SingleFutureOptionResponse, FutureProduct, FutureProductResponse, SingleFutureProductResponse, QuantityDecimalPrecision, QuantityDecimalPrecisionResponse, Warrant, WarrantResponse, SingleWarrantResponse, NestedFutureOptionChain, NestedFutureOptionChainResponse, FutureOptionChain, FutureOptionChainResponse, NestedOptionChain, NestedOptionChainResponse, CompactOptionChain, CompactOptionChainResponse, OptionChain, OptionChainResponse } from "../types/instruments.js";
import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
import _ from 'lodash'

export default class InstrumentsService {
    constructor(private httpClient: TastytradeHttpClient) {
    }

    //Instruments: Allows an API client to fetch data about instruments.
    async getCryptocurrencies(symbols: string[] = []): Promise<Cryptocurrency[]> {
        //Retrieve a set of cryptocurrencies given an array of one or more symbols.
        const queryParams = { symbol: symbols }
        const cryptocurrencies = await this.httpClient.getData(`/instruments/cryptocurrencies`, {}, queryParams);
        return extractResponseData<CryptocurrencyResponse>(cryptocurrencies).data.items;
    }
    async getSingleCryptocurrency(symbol: string): Promise<Cryptocurrency> {
        //Retrieve a cryptocurrency given a symbol.
        const encodedSymbol = encodeURIComponent(symbol)
        const singleCryptocurrency = await this.httpClient.getData(`/instruments/cryptocurrencies/${encodedSymbol}`, {}, {});
        return extractResponseData<SingleCryptocurrencyResponse>(singleCryptocurrency).data;
    }
    async getActiveEquities(queryParams = {}): Promise<ActiveEquity[]> {
        //Returns all active equities in a paginated fashion
        const activeEquities = await this.httpClient.getData(`/instruments/equities/active`, {}, queryParams);
        return extractResponseData<ActiveEquityResponse>(activeEquities).data.items;
    }
    async getEquityDefinitions(queryParams = {}): Promise<EquityDefinition[]> {
        //Returns a set of equity definitions given an array of one or more symbols
        const equityDefinitions = await this.httpClient.getData(`/instruments/equities`, {}, queryParams);
        return extractResponseData<EquityDefinitionResponse>(equityDefinitions).data.items;
    }
    async getSingleEquity(symbol: string): Promise<EquityDefinition> {
        //Returns a single equity definition for the provided symbol
        const singleEquity = await this.httpClient.getData(`/instruments/equities/${symbol}`, {}, {});
        return extractResponseData<SingleEquityDefinitionResponse>(singleEquity).data;
    }
    async getEquityOptions(symbols: string[], active = true, withExpired = false): Promise<EquityOption[]> {
        if (_.isEmpty(symbols)) {
          throw new Error('Symbols are required for InstrumentService.getEquityOptions')
        }

        //Returns a set of equity options given one or more symbols
        const queryParams = { symbols, active, withExpired }
        const equityOptions = await this.httpClient.getData(`/instruments/equity-options`, {}, queryParams);
        return extractResponseData<EquityOptionResponse>(equityOptions).data.items;
    }
    async getSingleEquityOption(symbol: string, queryParams = {}): Promise<EquityOption> {
        //Get equity option by symbol
        const singleOption = await this.httpClient.getData(`/instruments/equity-options/${symbol}`, {}, queryParams);
        return extractResponseData<SingleEquityOptionResponse>(singleOption).data;
    }
    async getFutures(queryParams = {}): Promise<Future[]> {
        //Returns a set of outright futures given an array of one or more symbols.
        const futures = await this.httpClient.getData(`/instruments/futures`, {}, queryParams);
        return extractResponseData<FutureResponse>(futures).data.items;
    }
    async getSingleFuture(symbol: string): Promise<Future> {
        //Returns an outright future given a symbol.
        const singleFuture = await this.httpClient.getData(`/instruments/futures/${symbol}`, {}, {});
        return extractResponseData<SingleFutureResponse>(singleFuture).data;
    }
    async getFutureOptionsProducts(): Promise<FutureOptionProduct[]> {
        //Returns metadata for all supported future option products
        const futureOptionsProducts = await this.httpClient.getData(`/instruments/future-option-products`, {}, {});
        return extractResponseData<FutureOptionProductResponse>(futureOptionsProducts).data.items;
    }
    async getSingleFutureOptionProduct(exchange: string, rootSymbol: string): Promise<FutureOptionProduct> {
        //Get a future option product by exchange and root symbol
        const singleFutureOptionProduct = await this.httpClient.getData(`/instruments/future-option-products/${exchange}/${rootSymbol}`, {}, {});
        return extractResponseData<SingleFutureOptionProductResponse>(singleFutureOptionProduct).data;
    }
    async getFutureOptions(queryParams = {}): Promise<FutureOption[]> {
        //Returns a set of future option(s) given an array of one or more symbols.
        //Uses TW symbology: [./ESZ9 EW4U9 190927P2975]
        const futureOptions = await this.httpClient.getData(`/instruments/future-options`, {}, queryParams);
        return extractResponseData<FutureOptionResponse>(futureOptions).data.items;
    }
    async getSingleFutureOption(symbol: string): Promise<FutureOption> {
        //Returns a future option given a symbol. Uses TW symbology: ./ESZ9 EW4U9 190927P2975
        const singleFutureOption = await this.httpClient.getData(`/instruments/future-options/${symbol}`, {}, {});
        return extractResponseData<SingleFutureOptionResponse>(singleFutureOption).data;
    }
    async getFuturesProducts(): Promise<FutureProduct[]> {
        //Returns metadata for all supported futures products
        const futuresProducts = await this.httpClient.getData(`/instruments/future-products`, {}, {});
        return extractResponseData<FutureProductResponse>(futuresProducts).data.items;
    }
    async getSingleFutureProduct(exchange: string, code: string): Promise<FutureProduct> {
        //Get future product from exchange and product code
        const singleFutureProduct = await this.httpClient.getData(`/instruments/future-products/${exchange}/${code}`, {}, {});
        return extractResponseData<SingleFutureProductResponse>(singleFutureProduct).data;
    }
    async getQuantityDecimalPrecisions(): Promise<QuantityDecimalPrecision[]> {
        //Retrieve all quantity decimal precisions.
        const quantityDecimalPrecisions = await this.httpClient.getData(`/instruments/quantity-decimal-precisions`, {}, {});
        return extractResponseData<QuantityDecimalPrecisionResponse>(quantityDecimalPrecisions).data.items;
    }
    async getWarrants(queryParams = {}): Promise<Warrant[]> {
        //Returns a set of warrant definitions that can be filtered by parameters
        const warrants = await this.httpClient.getData(`/instruments/warrants`, {}, queryParams);
        return extractResponseData<WarrantResponse>(warrants).data.items;
    }
    async getSingleWarrant(symbol: string): Promise<Warrant> {
        //Returns a single warrant definition for the provided symbol
        const singleWarrant = await this.httpClient.getData(`/instruments/warrants/${symbol}`, {}, {});
        return extractResponseData<SingleWarrantResponse>(singleWarrant).data;
    }

    //Futures-option-chains: Allows an API client to fetch futures option chains.
    async getNestedFutureOptionChains(symbol: string): Promise<NestedFutureOptionChain> {
        //Returns a futures option chain given a futures product code in a nested form to minimize redundant processing
        const nestedFutureOptionChains = await this.httpClient.getData(`/futures-option-chains/${symbol}/nested`, {}, {});
        return extractResponseData<NestedFutureOptionChainResponse>(nestedFutureOptionChains).data;
    }
    async getFutureOptionChain(symbol: string): Promise<FutureOptionChain> {
        //Returns a futures option chain given a futures product code, i.e. ES
        const futureOptionChain = await this.httpClient.getData(`/futures-option-chains/${symbol}`, {}, {});
        return extractResponseData<FutureOptionChainResponse>(futureOptionChain).data;
    }

    //Option-chains: Allows an API client to fetch futures option chains.
    async getNestedOptionChain(symbol: string): Promise<NestedOptionChain> {
        //Returns an option chain given an underlying symbol,
        //i.e. AAPL in a nested form to minimize redundant processing
        const nestedOptionChain = await this.httpClient.getData(`/option-chains/${symbol}/nested`, {}, {});
        return extractResponseData<NestedOptionChainResponse>(nestedOptionChain).data.items[0];
    }
    async getCompactOptionChain(symbol: string): Promise<CompactOptionChain> {
        //Returns an option chain given an underlying symbol, i.e. AAPL in a compact form to minimize content size
        const compactOptionChain = await this.httpClient.getData(`/option-chains/${symbol}/compact`, {}, {});
        return extractResponseData<CompactOptionChainResponse>(compactOptionChain).data;
    }
    async getOptionChain(symbol: string): Promise<OptionChain> {
        //Returns an option chain given an underlying symbol, i.e. AAPL
        const optionChain = await this.httpClient.getData(`/option-chains/${symbol}`, {}, {});
        return extractResponseData<OptionChainResponse>(optionChain).data;
    }
}
