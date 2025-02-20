import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { MarginRequirement, DryRunMarginRequirement } from "../types/margin-requirements.js";
export default class MarginRequirementsService {
    private httpClient;
    constructor(httpClient: TastytradeHttpClient);
    getMarginRequirements(accountNumber: string): Promise<MarginRequirement>;
    postMarginRequirements(accountNumber: string, order: object): Promise<DryRunMarginRequirement>;
}
//# sourceMappingURL=margin-requirements-service.d.ts.map