import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { MarketMetric, MarketMetricsResponse, HistoricalDividend, HistoricalDividendResponse, HistoricalEarnings, HistoricalEarningsResponse } from "../types/market-metrics.js";

export default class MarketMetricsService {
    constructor(private httpClient: TastytradeHttpClient) {
    }

    //Default
    async getMarketMetrics(queryParams = {}): Promise<MarketMetric[]> {
        //Returns an array of volatility data for given symbols.
        const marketMetrics = await this.httpClient.getData('/market-metrics', {}, queryParams);
        return extractResponseData<MarketMetricsResponse>(marketMetrics).data.items;
    }

    async getHistoricalDividendData(symbol: string): Promise<HistoricalDividend[]> {
        //Get historical dividend data
        const historicalDividendData = await this.httpClient.getData(`/market-metrics/historic-corporate-events/dividends/${symbol}`, {}, {});
        return extractResponseData<HistoricalDividendResponse>(historicalDividendData).data.items;
    }

    async getHistoricalEarningsData(symbol: string, queryParams = {}): Promise<HistoricalEarnings[]> {
        //Get historical earnings data
        const historicalEarningsData = await this.httpClient.getData(`/market-metrics/historic-corporate-events/earnings/${symbol}`, {}, queryParams);
        return extractResponseData<HistoricalEarningsResponse>(historicalEarningsData).data.items;
    }
}
