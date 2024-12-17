export interface Position {
    'account-number': string;
    'symbol': string;
    'instrument-type': string;
    'underlying-symbol': string;
    'quantity': string;
    'quantity-direction': 'Long' | 'Short';
    'close-price': string;
    'average-open-price': string;
    'average-yearly-market-close-price': string;
    'average-daily-market-close-price': string;
    'multiplier': number;
    'cost-effect': string;
    'is-suppressed': boolean;
    'is-frozen': boolean;
    'restricted-quantity': string;
    'realized-day-gain': string;
    'realized-day-gain-effect': string;
    'realized-day-gain-date': string;
    'realized-today': string;
    'realized-today-effect': string;
    'realized-today-date': string;
    'created-at': string;
    'updated-at': string;
}

export interface PositionsResponse {
    data: {
        items: Position[];
    };
    context: string;
}
