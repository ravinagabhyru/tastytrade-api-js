export interface MarketMetric {
    symbol: string;
    implied_volatility_index: number;
    implied_volatility_index_5_day_change: number;
    implied_volatility_index_rank: number;
    implied_volatility_percentile: number;
    implied_volatility_updated_at: string;
    liquidity_rank: number;
    liquidity_rating: number;
    liquidity_value: number;
    updated_at: string;
}
export interface MarketMetricsResponse {
    data: {
        items: MarketMetric[];
    };
}
export interface HistoricalDividend {
    symbol: string;
    ex_date: string;
    dividend_type: string;
    amount: number;
    declaration_date: string;
    record_date: string;
    payment_date: string;
    frequency: string;
}
export interface HistoricalDividendResponse {
    data: {
        items: HistoricalDividend[];
    };
}
export interface HistoricalEarnings {
    symbol: string;
    report_date: string;
    fiscal_quarter: string;
    fiscal_year: number;
    eps_estimate: number;
    eps_actual: number;
    eps_difference: number;
    eps_surprise_percent: number;
    period_end_date: string;
    revenue_estimate: number;
    revenue_actual: number;
    revenue_difference: number;
    revenue_surprise_percent: number;
}
export interface HistoricalEarningsResponse {
    data: {
        items: HistoricalEarnings[];
    };
}
//# sourceMappingURL=market-metrics.d.ts.map