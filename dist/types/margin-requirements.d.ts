export interface MarginRequirement {
    'account-number': string;
    'effective-date': string;
    'regulatory-margin': {
        'maintenance-requirement': number;
        'option-buying-power': number;
        'overnight-buying-power': number;
        'day-trade-buying-power': number;
        'futures-margin-requirement': number;
        'futures-overnight-margin-requirement': number;
    };
    'margin-calculation-type': string;
    'margin-equity': number;
    'net-liquidating-value': number;
    'stock-buying-power': number;
    'sweep-effect': number;
    'day-trade-excess': number;
    'day-trades-count': number;
    'futures-intraday-multiplier': number;
    'futures-overnight-multiplier': number;
    'stock-intraday-multiplier': number;
    'stock-overnight-multiplier': number;
    'margin-requirements': {
        'exchange-requirement': number;
        'maintenance-requirement': number;
        'initial-requirement': number;
        'intraday-initial-requirement': number;
        'day-trade-requirement': number;
        'futures-intraday-requirement': number;
        'futures-overnight-requirement': number;
    };
}
export interface MarginRequirementResponse {
    data: MarginRequirement;
}
export interface DryRunMarginRequirement {
    'buying-power-effect': number;
    'isolation-requirement': number;
    'margin-requirement-effect': number;
    'new-margin-requirement': number;
    'new-net-liquidating-value': number;
    'new-regulatory-maintenance-requirement': number;
    'new-regulatory-overnight-buying-power': number;
    'new-regulatory-option-buying-power': number;
    'new-regulatory-day-trade-buying-power': number;
    'new-futures-margin-requirement': number;
    'new-futures-overnight-margin-requirement': number;
    'new-stock-buying-power': number;
    'new-sweep-effect': number;
    'new-day-trade-excess': number;
    'error-code': string;
    'error-message': string;
    'warnings': string[];
}
export interface DryRunMarginRequirementResponse {
    data: DryRunMarginRequirement;
}
//# sourceMappingURL=margin-requirements.d.ts.map