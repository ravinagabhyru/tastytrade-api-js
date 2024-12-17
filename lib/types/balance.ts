export interface Balance {
    'account-number': string;
    'cash-balance': string;
    'long-equity-value': string;
    'short-equity-value': string;
    'long-derivative-value': string;
    'short-derivative-value': string;
    'long-futures-value': string;
    'short-futures-value': string;
    'long-futures-derivative-value': string;
    'short-futures-derivative-value': string;
    'long-margineable-value': string;
    'short-margineable-value': string;
    'margin-equity': string;
    'equity-buying-power': string;
    'derivative-buying-power': string;
    'day-trading-buying-power': string;
    'futures-margin-requirement': string;
    'available-trading-funds': string;
    'maintenance-requirement': string;
    'maintenance-call-value': string;
    'reg-t-call-value': string;
    'day-trading-call-value': string;
    'day-equity-call-value': string;
    'net-liquidating-value': string;
    'cash-available-to-withdraw': string;
    'day-trade-excess': string;
    'pending-cash': string;
    'pending-cash-effect': string;
    'long-cryptocurrency-value': string;
    'short-cryptocurrency-value': string;
    'cryptocurrency-margin-requirement': string;
    'unsettled-cryptocurrency-fiat-amount': string;
    'unsettled-cryptocurrency-fiat-effect': string;
    'closed-loop-available-balance': string;
    'equity-offering-margin-requirement': string;
    'long-bond-value': string;
    'bond-margin-requirement': string;
    'used-derivative-buying-power': string;
    'snapshot-date': string;
    'reg-t-margin-requirement'?: string;
    'futures-overnight-margin-requirement'?: string;
    'futures-intraday-margin-requirement'?: string;
    'maintenance-excess'?: string;
    'pending-margin-interest'?: string;
    'effective-cryptocurrency-buying-power'?: string;
    'updated-at'?: string;
    'time-of-day'?: string;
}

export interface BalanceResponse {
    data: Balance;
    context: string;
}

export interface BalanceSnapshotsResponse {
    data: {
        items: Balance[];
    };
    context: string;
}
