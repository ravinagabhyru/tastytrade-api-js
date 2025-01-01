// Order types
export interface OrderLeg {
    'instrument-type': 'Equity' | 'Equity Option' | 'Future' | 'Future Option' | 'Cryptocurrency';
    'symbol': string;
    'quantity'?: number;  // Not required for Notional Market orders
    'action': 'Buy to Open' | 'Buy to Close' | 'Sell to Open' | 'Sell to Close';
}

export interface Order {
    'time-in-force': 'Day' | 'GTC' | 'GTD';
    'order-type': 'Limit' | 'Market' | 'Stop' | 'Stop Limit' | 'Notional Market';
    'price'?: number;  // Required for Limit and Stop Limit orders
    'price-effect'?: 'Credit' | 'Debit';  // Required for Limit and Stop Limit orders
    'value'?: number;  // Required for Notional Market orders
    'value-effect'?: 'Credit' | 'Debit';  // Required for Notional Market orders
    'stop-trigger'?: number;  // Required for Stop and Stop Limit orders
    'gtc-date'?: string;  // Required for GTD orders, format: yyyy-mm-dd
    'source'?: string;  // Optional: Designates where the order originated
    'legs': OrderLeg[];
    'advanced-instructions'?: {
        'strict-position-effect-validation'?: boolean;
    };
    // Response-only fields below
    'id'?: number;
    'account-number'?: string;
    'status'?: string;
    'complex-order-id'?: number;
    'complex-order-tag'?: string;
    'cancellable'?: boolean;
    'editable'?: boolean;
    'edited'?: boolean;
    'contingent-status'?: string;
    'triggered'?: boolean;
    'routing-status'?: string;
    'updated-at'?: string;
    'created-at'?: string;
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

// Order Dry Run types
export interface OrderDryRun {
    'buying-power-effect': number;
    'margin-requirement': number;
    'margin-requirement-effect': number;
    'commissions': number;
    'fees': number;
    'impact': {
        'effect': string;
        'price': number;
        'notional-value': number;
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

// Complex Order types
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

// Replacement Order types
export interface ReplacementOrderDryRun extends OrderDryRun {
    'old-margin-requirement': number;
    'old-buying-power-effect': number;
}

export interface ReplacementOrderDryRunResponse {
    data: {
        item: ReplacementOrderDryRun;
    };
}

// Order Reconfirmation types
export interface OrderReconfirmation {
    'reconfirmation-required': boolean;
    'reconfirmation-reason'?: string;
}

export interface OrderReconfirmationResponse {
    data: {
        item: OrderReconfirmation;
    };
}
