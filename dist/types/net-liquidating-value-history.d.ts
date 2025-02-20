/**
 * Net Liquidating Value represents the total value of an account if all positions were closed
 * and all cash was withdrawn. This history tracks these values over time.
 */
export interface NetLiquidatingValueSnapshot {
    'account-number': string;
    'cash-balance': string;
    'created-at': string;
    'dividend-balance': string;
    'equity-value': string;
    'future-option-market-value': string;
    'futures-market-value': string;
    'net-liquidating-value': string;
    'net-liquidating-value-change': string;
    'net-liquidating-value-change-percent': string;
    'option-market-value': string;
    'pending-cash-balance': string;
    'snapshot-type': 'EOD' | 'BOD' | 'CURRENT';
}
export interface NetLiquidatingValueHistoryResponse {
    data: {
        items: NetLiquidatingValueSnapshot[];
    };
    context: string;
}
/**
 * Current Net Liquidating Value represents the live total value of an account
 */
export interface CurrentNetLiquidatingValue {
    'account-number': string;
    'net-liquidating-value': string;
    'pending-cash-balance': string;
    'cash-balance': string;
    'equity-value': string;
    'option-market-value': string;
    'dividend-balance': string;
    'future-option-market-value': string;
    'futures-market-value': string;
}
export interface CurrentNetLiquidatingValueResponse {
    data: {
        item: CurrentNetLiquidatingValue;
    };
    context: string;
}
export type SnapshotType = 'EOD' | 'BOD' | 'CURRENT';
//# sourceMappingURL=net-liquidating-value-history.d.ts.map