export interface MarginRequirement {
    'underlying-symbol': string;
    'long-equity-initial': number;
    'short-equity-initial': number;
    'long-equity-maintenance': number;
    'short-equity-maintenance': number;
    'naked-option-standard': number;
    'naked-option-minimum': number;
    'naked-option-floor': number;
    'clearing-identifier': string;
    'is-deleted': boolean;
}
export interface MarginRequirementResponse {
    data: MarginRequirement;
    context: string;
}
export interface PositionLimit {
    id: number;
    'account-number': string;
    'equity-order-size': number;
    'equity-option-order-size': number;
    'future-order-size': number;
    'future-option-order-size': number;
    'underlying-opening-order-limit': number;
    'equity-position-size': number;
    'equity-option-position-size': number;
    'future-position-size': number;
    'future-option-position-size': number;
}
export interface PositionLimitResponse {
    data: PositionLimit;
    context: string;
}
export interface MarginRequirementsGlobalConfiguration {
    'risk-free-rate': number;
}
export interface MarginRequirementsGlobalConfigurationResponse {
    data: {
        item: MarginRequirementsGlobalConfiguration;
    };
}
//# sourceMappingURL=risk-parameters.d.ts.map