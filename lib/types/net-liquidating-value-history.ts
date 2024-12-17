// Net Liquidating Value History types
export interface NetLiquidatingValueSnapshot {
    'account-number': string;
    'cash-balance': number;
    'created-at': string;
    'dividend-balance': number;
    'equity-value': number;
    'future-option-market-value': number;
    'futures-market-value': number;
    'net-liquidating-value': number;
    'net-liquidating-value-change': number;
    'net-liquidating-value-change-percent': number;
    'option-market-value': number;
    'pending-cash-balance': number;
    'snapshot-type': string;
}

export interface NetLiquidatingValueHistoryResponse {
    data: {
        items: NetLiquidatingValueSnapshot[];
    };
}

// Current Net Liquidating Value types
export interface CurrentNetLiquidatingValue {
    'account-number': string;
    'net-liquidating-value': number;
    'pending-cash-balance': number;
    'cash-balance': number;
    'equity-value': number;
    'option-market-value': number;
    'dividend-balance': number;
    'future-option-market-value': number;
    'futures-market-value': number;
}

export interface CurrentNetLiquidatingValueResponse {
    data: {
        item: CurrentNetLiquidatingValue;
    };
}
