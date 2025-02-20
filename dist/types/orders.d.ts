export interface OrderLeg {
    'instrument-type': 'Equity' | 'Equity Option' | 'Future' | 'Future Option' | 'Cryptocurrency';
    'symbol': string;
    'quantity'?: number;
    'action': 'Buy to Open' | 'Buy to Close' | 'Sell to Open' | 'Sell to Close';
    'remaining-quantity'?: number;
    'fills'?: Array<any>;
}
export interface Order {
    'time-in-force': 'Day' | 'GTC' | 'GTD';
    'order-type': 'Limit' | 'Market' | 'Stop' | 'Stop Limit' | 'Notional Market';
    'legs': OrderLeg[];
    'price'?: number;
    'price-effect'?: 'Credit' | 'Debit';
    'value'?: number;
    'value-effect'?: 'Credit' | 'Debit';
    'stop-trigger'?: number;
    'gtc-date'?: string;
    'source'?: string;
    'advanced-instructions'?: {
        'strict-position-effect-validation'?: boolean;
    };
    'id'?: number;
    'account-number'?: string;
    'size'?: number;
    'underlying-symbol'?: string;
    'underlying-instrument-type'?: string;
    'status'?: 'Received' | 'Routed' | 'In Flight' | 'Live' | 'Cancel Requested' | 'Replace Requested' | 'Contingent' | 'Filled' | 'Cancelled' | 'Expired' | 'Rejected' | 'Removed' | 'Partially Removed';
    'contingent-status'?: 'Pending Order';
    'cancellable'?: boolean;
    'editable'?: boolean;
    'edited'?: boolean;
    'ext-exchange-order-number'?: string;
    'ext-client-order-id'?: string;
    'ext-global-order-number'?: number;
    'received-at'?: string;
    'updated-at'?: number;
    'cancelled-at'?: string;
    'terminal-at'?: string;
    'complex-order-id'?: number;
    'complex-order-tag'?: string;
    'preflight-id'?: number;
    'global-request-id'?: string;
    'triggered'?: boolean;
    'routing-status'?: string;
}
export interface OrderResponse {
    data: {
        item: Order;
    };
}
export interface OrdersResponse {
    data: {
        items: Order[];
    };
}
export interface OrderDryRun {
    'buying-power-effect': {
        'change-in-margin-requirement': string;
        'change-in-margin-requirement-effect': 'Credit' | 'Debit';
        'change-in-buying-power': string;
        'change-in-buying-power-effect': 'Credit' | 'Debit';
        'current-buying-power': string;
        'current-buying-power-effect': 'Credit' | 'Debit';
        'new-buying-power': string;
        'new-buying-power-effect': 'Credit' | 'Debit';
        'isolated-order-margin-requirement': string;
        'isolated-order-margin-requirement-effect': 'Credit' | 'Debit';
        'is-spread': boolean;
        'impact': string;
        'effect': 'Credit' | 'Debit';
    };
    'fee-calculation': {
        'regulatory-fees': string;
        'regulatory-fees-effect': 'Credit' | 'Debit' | 'None';
        'clearing-fees': string;
        'clearing-fees-effect': 'Credit' | 'Debit' | 'None';
        'commission': string;
        'commission-effect': 'Credit' | 'Debit' | 'None';
        'proprietary-index-option-fees': string;
        'proprietary-index-option-fees-effect': 'Credit' | 'Debit' | 'None';
        'total-fees': string;
        'total-fees-effect': 'Credit' | 'Debit' | 'None';
    };
    'warnings': string[];
    'error-code'?: string;
    'error-message'?: string;
}
export interface OrderDryRunResponse {
    data: {
        item: OrderDryRun;
    };
}
export interface ComplexOrder extends Order {
    'complex-order-tag': string;
    'complex-order-id': number;
    'child-orders': Order[];
}
export interface ComplexOrderResponse {
    data: {
        item: ComplexOrder;
    };
}
export interface ReplacementOrderDryRun extends OrderDryRun {
    'old-margin-requirement': number;
    'old-buying-power-effect': number;
}
export interface ReplacementOrderDryRunResponse {
    data: {
        item: ReplacementOrderDryRun;
    };
}
export interface OrderReconfirmation {
    'reconfirmation-required': boolean;
    'reconfirmation-reason'?: string;
}
export interface OrderReconfirmationResponse {
    data: {
        item: OrderReconfirmation;
    };
}
//# sourceMappingURL=orders.d.ts.map