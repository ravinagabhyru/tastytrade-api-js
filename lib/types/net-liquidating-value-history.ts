/**
 * Net Liquidating Value represents the total value of an account if all positions were closed 
 * and all cash was withdrawn. This history tracks these values over time.
 */
export interface NetLiquidatingValueSnapshot {
    'account-number': string;
    'cash-balance': string;  // All monetary values come as strings from API
    'created-at': string;  // ISO datetime
    'dividend-balance': string;
    'equity-value': string;
    'future-option-market-value': string;
    'futures-market-value': string;
    'net-liquidating-value': string;
    'net-liquidating-value-change': string;
    'net-liquidating-value-change-percent': string;
    'option-market-value': string;
    'pending-cash-balance': string;
    'snapshot-type': 'EOD' | 'BOD' | 'CURRENT';  // End of Day, Beginning of Day, or Current
}

export interface NetLiquidatingValueHistoryResponse {
    data: {
        items: NetLiquidatingValueSnapshot[];
    };
    context: string;  // Added context as it's present in all responses
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

// Helper type for snapshot types
export type SnapshotType = 'EOD' | 'BOD' | 'CURRENT';
