import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { MarginRequirement, PositionLimit, MarginRequirementsGlobalConfiguration } from "../types/risk-parameters.js";
export default class RiskParametersService {
    private httpClient;
    constructor(httpClient: TastytradeHttpClient);
    getEffectiveMarginRequirements(accountNumber: string, underlyingSymbol: string): Promise<MarginRequirement>;
    getPositionLimit(accountNumber: string): Promise<PositionLimit>;
    getMarginRequirementsPublicConfiguration(): Promise<MarginRequirementsGlobalConfiguration>;
}
//# sourceMappingURL=risk-parameters-service.d.ts.map