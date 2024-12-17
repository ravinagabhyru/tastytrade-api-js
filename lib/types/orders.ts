// Order types
export interface OrderLeg {
    'instrument-type': string;
    'symbol': string;
    'quantity': number;
    'action': 'Buy' | 'Sell';
    'side': 'Open' | 'Close';
}

export interface Order {
    'id': number;
    'account-number': string;
    'time-in-force': 'Day' | 'GTC' | 'GTD';
    'order-type': 'Limit' | 'Market' | 'Stop' | 'Stop Limit';
    'size': number;
    'underlying-symbol': string;
    'price': number;
    'price-effect': string;
    'status': string;
    'legs': OrderLeg[];
    'complex-order-id'?: number;
    'complex-order-tag'?: string;
    'cancellable': boolean;
    'editable': boolean;
    'edited': boolean;
    'contingent-status'?: string;
    'triggered'?: boolean;
    'trigger-price'?: number;
    'stop-triggered'?: boolean;
    'routing-status'?: string;
    'updated-at': string;
    'created-at': string;
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
