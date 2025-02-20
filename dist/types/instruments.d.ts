export interface Cryptocurrency {
    'id': number;
    'symbol': string;
    'instrument-type': 'Cryptocurrency';
    'short-description': string;
    'description': string;
    'is-closing-only': boolean;
    'active': boolean;
    'tick-size': string;
    'streamer-symbol': string;
    'destination-venue-symbols': Array<{
        'id': number;
        'symbol': string;
        'destination-venue': string;
        'max-quantity-precision': number;
        'max-price-precision': number;
        'routable': boolean;
    }>;
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
export interface ActiveEquity {
    'id': number;
    'symbol': string;
    'instrument-type': 'Equity';
    'cusip': string;
    'short-description': string;
    'is-index': boolean;
    'listed-market': string;
    'description': string;
    'lendability': 'Easy To Borrow' | 'Locate Required' | 'Preborrow';
    'borrow-rate': string;
    'market-time-instrument-collection': string;
    'is-closing-only': boolean;
    'is-options-closing-only': boolean;
    'active': boolean;
    'is-fractional-quantity-eligible': boolean;
    'is-illiquid': boolean;
    'is-etf': boolean;
    'streamer-symbol': string;
    'tick-sizes': Array<{
        'value': string;
        'threshold'?: string;
    }>;
    'option-tick-sizes'?: Array<{
        'value': string;
        'threshold'?: string;
    }>;
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
export interface EquityOption {
    'symbol': string;
    'instrument-type': 'Equity Option';
    'active': boolean;
    'strike-price': string;
    'root-symbol': string;
    'underlying-symbol': string;
    'expiration-date': string;
    'exercise-style': 'American' | 'European';
    'shares-per-contract': number;
    'option-type': 'C' | 'P';
    'option-chain-type': string;
    'expiration-type': string;
    'settlement-type': string;
    'stops-trading-at': string;
    'market-time-instrument-collection': string;
    'days-to-expiration': number;
    'expires-at': string;
    'is-closing-only': boolean;
    'streamer-symbol'?: string;
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
export interface Future {
    'symbol': string;
    'product-code': string;
    'contract-size': string;
    'tick-size': string;
    'notional-multiplier': string;
    'main-fraction': string;
    'sub-fraction': string;
    'display-factor': string;
    'last-trade-date': string;
    'expiration-date': string;
    'closing-only-date': string;
    'active': boolean;
    'active-month': boolean;
    'next-active-month': boolean;
    'is-closing-only': boolean;
    'stops-trading-at': string;
    'expires-at': string;
    'product-group': string;
    'exchange': string;
    'roll-target-symbol': string;
    'streamer-exchange-code': string;
    'streamer-symbol': string;
    'back-month-first-calendar-symbol': boolean;
    'is-tradeable': boolean;
    'future-etf-equivalent'?: {
        'symbol': string;
        'share-quantity': number;
    };
    'future-product': FutureProduct;
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
export interface FutureOptionProduct {
    'root-symbol': string;
    'cash-settled': boolean;
    'code': string;
    'legacy-code': string;
    'clearport-code': string;
    'clearing-code': string;
    'clearing-exchange-code': string;
    'clearing-price-multiplier': string;
    'display-factor': string;
    'exchange': string;
    'product-type': string;
    'expiration-type': string;
    'settlement-delay-days': number;
    'is-rollover': boolean;
    'market-sector': string;
}
export interface FutureOptionProductResponse {
    data: {
        items: FutureOptionProduct[];
    };
    context: string;
}
export interface SingleFutureOptionProductResponse {
    data: FutureOptionProduct;
    context: string;
}
export interface FutureOption {
    'symbol': string;
    'underlying-symbol': string;
    'product-code': string;
    'expiration-date': string;
    'root-symbol': string;
    'option-root-symbol': string;
    'strike-price': string;
    'exchange': string;
    'exchange-symbol': string;
    'option-type': 'C' | 'P';
    'exercise-style': string;
    'is-vanilla': boolean;
    'is-primary-deliverable': boolean;
    'future-price-ratio': string;
    'multiplier': string;
    'underlying-count': string;
    'is-confirmed': boolean;
    'notional-value': string;
    'display-factor': string;
    'security-exchange': string;
    'sx-id': string;
    'settlement-type': string;
    'strike-factor': string;
    'maturity-date': string;
    'is-exercisable-weekly': boolean;
    'last-trade-time': string;
    'days-to-expiration': number;
    'is-closing-only': boolean;
    'active': boolean;
    'stops-trading-at': string;
    'expires-at': string;
    'future-option-product': FutureOptionProduct;
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
export interface FutureProduct {
    'root-symbol': string;
    'code': string;
    'description': string;
    'clearing-code': string;
    'clearing-exchange-code': string;
    'clearport-code': string;
    'legacy-code': string;
    'exchange': string;
    'legacy-exchange-code': string;
    'product-type': string;
    'listed-months': string[];
    'active-months': string[];
    'notional-multiplier': string;
    'tick-size': string;
    'display-factor': string;
    'streamer-exchange-code': string;
    'small-notional': boolean;
    'back-month-first-calendar-symbol': boolean;
    'first-notice': boolean;
    'cash-settled': boolean;
    'security-group': string;
    'market-sector': string;
    'option-products'?: FutureOptionProduct[];
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
export interface NestedOptionChain {
    'underlying-symbol': string;
    'root-symbol': string;
    'option-chain-type': string;
    'shares-per-contract': number;
    'expirations': Array<{
        'expiration-type': string;
        'expiration-date': string;
        'days-to-expiration': number;
        'settlement-type': string;
        'strikes': Array<{
            'strike-price': string;
            'call': string;
            'call-streamer-symbol': string;
            'put': string;
            'put-streamer-symbol': string;
        }>;
    }>;
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
//# sourceMappingURL=instruments.d.ts.map