import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
export default class MarketMetricsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    //Default
    async getMarketMetrics(queryParams = {}) {
        //Returns an array of volatility data for given symbols.
        const marketMetrics = await this.httpClient.getData('/market-metrics', {}, queryParams);
        return extractResponseData(marketMetrics).data.items;
    }
    async getHistoricalDividendData(symbol) {
        //Get historical dividend data
        const historicalDividendData = await this.httpClient.getData(`/market-metrics/historic-corporate-events/dividends/${symbol}`, {}, {});
        return extractResponseData(historicalDividendData).data.items;
    }
    async getHistoricalEarningsData(symbol, queryParams = {}) {
        //Get historical earnings data
        const historicalEarningsData = await this.httpClient.getData(`/market-metrics/historic-corporate-events/earnings/${symbol}`, {}, queryParams);
        return extractResponseData(historicalEarningsData).data.items;
    }
}
//# sourceMappingURL=market-metrics-service.js.map