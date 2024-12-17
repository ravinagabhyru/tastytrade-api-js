export interface SymbolData {
    symbol: string;
    description: string;
    'listed-market': string;
    'price-increments': string;
    'trading-hours': string;
    options: boolean;
    'instrument-type': string;
}

export interface SymbolSearchResponse {
    data: {
        items: SymbolData[];
    };
    context: string;
}
