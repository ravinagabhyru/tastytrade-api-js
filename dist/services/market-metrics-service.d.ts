import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { MarketMetric, HistoricalDividend, HistoricalEarnings } from "../types/market-metrics.js";
export default class MarketMetricsService {
    private httpClient;
    constructor(httpClient: TastytradeHttpClient);
    getMarketMetrics(queryParams?: {}): Promise<MarketMetric[]>;
    getHistoricalDividendData(symbol: string): Promise<HistoricalDividend[]>;
    getHistoricalEarningsData(symbol: string, queryParams?: {}): Promise<HistoricalEarnings[]>;
}
//# sourceMappingURL=market-metrics-service.d.ts.map