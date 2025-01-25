/**
 * Position field definitions from API docs:
 * 
 * account-number: Your account number
 * average-daily-market-close-price: Cost basis for unrealized day gain calculation
 * average-open-price: A running average of the open price of the position. Cost basis for unrealized gain since open calculation
 * average-yearly-market-close-price: Cost basis for unrealized year gain calculation
 * close-price: Price of the instrument at market close yesterday
 * cost-effect: A tastytrade-specific value to categorize the cost of the position (Credit/Debit/None)
 * expires-at: The date and time at which the position expires. Applies to futures and options.
 * instrument-type: The instrument type of the position
 * is-frozen: Indicates when an admin has taken action to freeze this position. Frozen positions are not adjustable/tradeable.
 * is-suppressed: This field is not in use anymore and can be ignored
 * multiplier: Indicates the notional multiplier of the position based on what is delivered if exercised/assigned
 * quantity: The quantity of your position. Some stocks can be traded in fractional quantities.
 * quantity-direction: Indicates the side or direction of the position. Zero means the position is closed.
 * realized-day-gain: Aggregate amount of profit/loss on a realized position for the current trading day
 * realized-day-gain-date: Indicates the date of realized day gain
 * realized-day-gain-effect: The direction of the realized day gain. Credit means positive gain. Debit means loss.
 * realized-today: The total profit or loss realized from a position since it was opened.
 * realized-today-date: Indicates the date of the realized today value.
 * realized-today-effect: The direction of the realized today value. Credit means positive gain. Debit means loss.
 * restricted-quantity: The quantity that cannot be traded or modified due to something like an expected assignment
 * symbol: Symbol of the position
 * underlying-symbol: The symbol of the underlying instrument, if applicable
 */
export interface Position {
    'account-number': string;
    'symbol': string;
    'instrument-type': 'Equity' | 'Equity Option' | 'Future' | 'Future Option' | 'Cryptocurrency';
    'underlying-symbol': string;
    'quantity': string;
    'quantity-direction': 'Long' | 'Short' | 'Zero';
    'close-price': string;
    'average-open-price': string;
    'average-yearly-market-close-price': string;
    'average-daily-market-close-price': string;
    'multiplier': number;
    'cost-effect': 'Credit' | 'Debit' | 'None';
    'is-suppressed': boolean;
    'is-frozen': boolean;
    'restricted-quantity': string;
    'realized-day-gain': string;
    'realized-day-gain-effect': 'Credit' | 'Debit' | 'None';
    'realized-day-gain-date': string;
    'realized-today': string;
    'realized-today-effect': 'Credit' | 'Debit' | 'None';
    'realized-today-date': string;
    'created-at': string;
    'updated-at': string;
    'expires-at'?: string;
}

export interface PositionResponse {
    data: {
        items: Position[];
    };
    context: string;
}

// Helper types for position calculations
export type PositionEffect = 'Credit' | 'Debit' | 'None';
export type PositionDirection = 'Long' | 'Short' | 'Zero';
export type InstrumentType = 'Equity' | 'Equity Option' | 'Future' | 'Future Option' | 'Cryptocurrency';
