export interface Transaction {
    id: number;
    'account-number': string;
    symbol: string;
    'instrument-type': string;
    'underlying-symbol': string;
    'transaction-type': string;
    'transaction-sub-type': string;
    description: string;
    action?: string;
    quantity?: string;
    price?: string;
    'executed-at': string;
    'transaction-date': string;
    value: string;
    'value-effect': string;
    'net-value': string;
    'net-value-effect': string;
    'is-estimated-fee': boolean;
}
export interface Pagination {
    'per-page': number;
    'page-offset': number;
    'item-offset': number;
    'total-items': number;
    'total-pages': number;
    'current-item-count': number;
    'previous-link': string | null;
    'next-link': string | null;
    'paging-link-template': string | null;
}
export interface TransactionsResponse {
    data: {
        items: Transaction[];
    };
    'api-version': string;
    context: string;
    pagination: Pagination;
}
export interface SingleTransactionResponse {
    data: Transaction;
    context: string;
}
export interface TransactionFeesResponse {
    data: {
        'total-fees': string;
        'total-fees-effect': string;
    };
    context: string;
}
//# sourceMappingURL=transaction.d.ts.map