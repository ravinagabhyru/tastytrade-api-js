// Cryptocurrency types
export interface Cryptocurrency {
    symbol: string;
    description: string;
    'is-closing-only': boolean;
    'is-crypto': boolean;
    'is-index': boolean;
    'is-mini': boolean;
    'margin-requirement': number;
    'notional-multiplier': number;
    'price-increment': number;
    'product-type': string;
    'root-symbol': string;
    'tick-size': number;
}

export interface CryptocurrencyResponse {
    data: {
        items: Cryptocurrency[];
    };
    context: string;
}

export interface SingleCryptocurrencyResponse {
    data: Cryptocurrency;
    context: string;
}

// Equity types
export interface ActiveEquity {
    symbol: string;
    description: string;
    'is-closing-only': boolean;
    'is-index': boolean;
    'is-mini': boolean;
    'product-type': string;
}

export interface ActiveEquityResponse {
    data: {
        items: ActiveEquity[];
    };
    context: string;
}

export interface EquityDefinition extends ActiveEquity {
    'beta': number;
    'dividend-rate': number;
    'implied-dividend-rate': number;
    'implied-volatility': number;
    'liquidity-rating': number;
    'margin-requirement': number;
}

export interface EquityDefinitionResponse {
    data: {
        items: EquityDefinition[];
    };
    context: string;
}

export interface SingleEquityDefinitionResponse {
    data: EquityDefinition;
    context: string;
}

// Equity Option types
export interface EquityOption {
    symbol: string;
    description: string;
    'exercise-style': string;
    'expiration-date': string;
    'is-closing-only': boolean;
    'is-mini': boolean;
    'margin-requirement': number;
    'multiplier': number;
    'option-type': string;
    'price-increment': number;
    'product-type': string;
    'root-symbol': string;
    'strike-price': number;
    'tick-size': number;
    'underlying-symbol': string;
}

export interface EquityOptionResponse {
    data: {
        items: EquityOption[];
    };
    context: string;
}

export interface SingleEquityOptionResponse {
    data: EquityOption;
    context: string;
}

// Future types
export interface Future {
    symbol: string;
    description: string;
    'expiration-date': string;
    'is-closing-only': boolean;
    'is-mini': boolean;
    'margin-requirement': number;
    'multiplier': number;
    'price-increment': number;
    'product-type': string;
    'root-symbol': string;
    'tick-size': number;
}

export interface FutureResponse {
    data: {
        items: Future[];
    };
    context: string;
}

export interface SingleFutureResponse {
    data: Future;
    context: string;
}

// Future Option Product types
export interface FutureOptionProduct {
    'exchange': string;
    'root-symbol': string;
    'option-root-symbol': string;
    'description': string;
    'product-type': string;
    'tick-size': number;
    'price-increment': number;
    'strike-increment': number;
    'multiplier': number;
    'is-mini': boolean;
}

export interface FutureOptionProductResponse {
    data: {
        items: FutureOptionProduct[];
    };
    context: string
}

export interface SingleFutureOptionProductResponse {
    data: FutureOptionProduct;
    context: string;
}

// Future Option types
export interface FutureOption {
    symbol: string;
    description: string;
    'exercise-style': string;
    'expiration-date': string;
    'is-closing-only': boolean;
    'is-mini': boolean;
    'margin-requirement': number;
    'multiplier': number;
    'option-type': string;
    'price-increment': number;
    'product-type': string;
    'root-symbol': string;
    'strike-price': number;
    'tick-size': number;
    'underlying-symbol': string;
}

export interface FutureOptionResponse {
    data: {
        items: FutureOption[];
    };
    context: string;
}

export interface SingleFutureOptionResponse {
    data: FutureOption;
    context: string;
}

// Future Product types
export interface FutureProduct {
    'exchange': string;
    'code': string;
    'root-symbol': string;
    'description': string;
    'product-type': string;
    'tick-size': number;
    'price-increment': number;
    'multiplier': number;
    'is-mini': boolean;
}

export interface FutureProductResponse {
    data: {
        items: FutureProduct[];
    };
    context: string;
}

export interface SingleFutureProductResponse {
    data: FutureProduct;
    context: string;
}

// Quantity Decimal Precision types
export interface QuantityDecimalPrecision {
    'symbol': string;
    'precision': number;
}

export interface QuantityDecimalPrecisionResponse {
    data: {
        items: QuantityDecimalPrecision[];
    };
    context: string;
}

// Warrant types
export interface Warrant {
    symbol: string;
    description: string;
    'expiration-date': string;
    'is-closing-only': boolean;
    'is-mini': boolean;
    'margin-requirement': number;
    'multiplier': number;
    'price-increment': number;
    'product-type': string;
    'root-symbol': string;
    'strike-price': number;
    'tick-size': number;
    'underlying-symbol': string;
}

export interface WarrantResponse {
    data: {
        items: Warrant[];
    };
    context: string;
}

export interface SingleWarrantResponse {
    data: Warrant;
    context: string;
}

// Future Option Chain types
export interface NestedFutureOptionChain {
    'underlying-symbol': string;
    'root-symbol': string;
    'option-chain-type': string;
    'expirations': {
        'expiration-date': string;
        'strikes': {
            'strike-price': number;
            'call': FutureOption;
            'put': FutureOption;
        }[];
    }[];
}

export interface NestedFutureOptionChainResponse {
    data: NestedFutureOptionChain;
    context: string;
}

export interface FutureOptionChain {
    'underlying-symbol': string;
    'root-symbol': string;
    'option-chain-type': string;
    'options': FutureOption[];
}

export interface FutureOptionChainResponse {
    data: FutureOptionChain;
    context: string;
}

// Option Chain types
export interface NestedOptionChain {
    'underlying-symbol': string;
    'root-symbol': string;
    'option-chain-type': string;
    'expirations': {
        'expiration-date': string;
        'strikes': {
            'strike-price': number;
            'call': EquityOption;
            'put': EquityOption;
        }[];
    }[];
}

export interface NestedOptionChainResponse {
    data: {
        items: NestedOptionChain[];
    };
    context: string;
}

export interface CompactOptionChain {
    'underlying-symbol': string;
    'root-symbol': string;
    'option-chain-type': string;
    'multiplier': number;
    'options': {
        'expiration-date': string;
        'strike-price': number;
        'option-type': string;
        'symbol': string;
    }[];
}

export interface CompactOptionChainResponse {
    data: CompactOptionChain;
    context: string;
}

export interface OptionChain {
    'underlying-symbol': string;
    'root-symbol': string;
    'option-chain-type': string;
    'options': EquityOption[];
}

export interface OptionChainResponse {
    data: OptionChain;
    context: string;
}
