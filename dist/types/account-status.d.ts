/**
 * Account Trading Status affects whether or not you are allowed to place trades.
 * If your account is closed or frozen, you will be blocked from placing trades.
 * If your account is not in good standing with tastytrade, it may be marked "closing only,"
 * meaning you will only be allowed to place trades to close out any positions you hold.
 */
export interface AccountStatus {
    'account-number': string;
    'day-trade-count': number;
    'equities-margin-calculation-type': string;
    'fee-schedule-name': string;
    'futures-margin-rate-multiplier': string;
    'has-intraday-equities-margin': boolean;
    'id': number;
    'is-aggregated-at-clearing': boolean;
    'is-closed': boolean;
    'is-closing-only': boolean;
    'is-cryptocurrency-closing-only': boolean;
    'is-cryptocurrency-enabled': boolean;
    'is-frozen': boolean;
    'is-full-equity-margin-required': boolean;
    'is-futures-closing-only': boolean;
    'is-futures-intra-day-enabled': boolean;
    'is-futures-enabled': boolean;
    'is-in-day-trade-equity-maintenance-call': boolean;
    'is-in-margin-call': boolean;
    'is-pattern-day-trader': boolean;
    'is-risk-reducing-only': boolean;
    'is-small-notional-futures-intra-day-enabled': boolean;
    'is-roll-the-day-forward-enabled': boolean;
    'are-far-otm-net-options-restricted': boolean;
    'options-level': string;
    'short-calls-enabled': boolean;
    'small-notional-futures-margin-rate-multiplier': string;
    'is-equity-offering-enabled': boolean;
    'is-equity-offering-closing-only': boolean;
    'enhanced-fraud-safeguards-enabled-at': string;
    'updated-at': string;
}
export interface AccountStatusResponse {
    data: AccountStatus;
    context: string;
}
//# sourceMappingURL=account-status.d.ts.map