/**
 * Balance field definitions from API docs:
 *
 * net-liquidating-value: The total current value of the account. Shows how much cash you would end up with if you closed all positions.
 * pending-cash: Cash that is in a holding period temporarily while a cash transfer is processed.
 * pending-cash-effect: Will be Credit when account is about to be credited with pending cash.
 * long-equity-value/long-derivative-value: Describe the value of your positions, where derivative means options.
 * equity-buying-power/derivative-buying-power: Account's buying power for equities and derivatives.
 */
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
    'pending-cash-effect': 'Credit' | 'Debit' | 'None';
    'long-cryptocurrency-value': string;
    'short-cryptocurrency-value': string;
    'cryptocurrency-margin-requirement': string;
    'unsettled-cryptocurrency-fiat-amount': string;
    'unsettled-cryptocurrency-fiat-effect': 'Credit' | 'Debit' | 'None';
    'closed-loop-available-balance': string;
    'equity-offering-margin-requirement': string;
    'long-bond-value': string;
    'bond-margin-requirement': string;
    'used-derivative-buying-power': string;
    'snapshot-date': string;
    'reg-t-margin-requirement': string;
    'futures-overnight-margin-requirement': string;
    'futures-intraday-margin-requirement': string;
    'maintenance-excess': string;
    'pending-margin-interest': string;
    'effective-cryptocurrency-buying-power': string;
    'updated-at': string;
}
export interface BalanceResponse {
    data: Balance;
    context: string;
}
export interface BalanceSnapshot extends Balance {
    'time-of-day': 'BOD' | 'EOD';
}
export interface BalanceSnapshotResponse {
    data: {
        items: BalanceSnapshot[];
    };
    context: string;
}
export type BalanceEffect = 'Credit' | 'Debit' | 'None';
//# sourceMappingURL=balance.d.ts.map