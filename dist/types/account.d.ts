export interface Account {
    'account-number': string;
    'external-id': string;
    'opened-at': string;
    'nickname': string;
    'account-type-name': string;
    'day-trader-status': boolean;
    'is-closed': boolean;
    'is-firm-error': boolean;
    'is-firm-proprietary': boolean;
    'is-futures-approved': boolean;
    'is-test-drive': boolean;
    'margin-or-cash': 'Margin' | 'Cash';
    'is-foreign': boolean;
    'funding-date': string;
    'investment-objective': string;
    'futures-account-purpose': string;
    'suitable-options-level': string;
    'created-at': string;
}
export interface AccountWithAuthority {
    account: Account;
    'authority-level': 'owner' | 'trade-only' | 'read-only';
}
export interface CustomerAccountsResponse {
    data: {
        items: AccountWithAuthority[];
    };
    context: string;
}
export interface SingleAccountResponse {
    data: Account;
    context: string;
}
//# sourceMappingURL=account.d.ts.map