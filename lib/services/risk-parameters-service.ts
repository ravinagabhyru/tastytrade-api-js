import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { 
    MarginRequirement, MarginRequirementResponse,
    PositionLimit, PositionLimitResponse,
    MarginRequirementsGlobalConfiguration, MarginRequirementsGlobalConfigurationResponse
} from "../types/risk-parameters.js";

export default class RiskParametersService {
    constructor(private httpClient: TastytradeHttpClient) {
    }
    
    //Accounts: Operations about accounts
    async getEffectiveMarginRequirements(accountNumber: string, underlyingSymbol: string): Promise<MarginRequirement> {
        //Get effective margin requirements for account
        const effectiveMarginRequirements = await this.httpClient.getData(`/accounts/${accountNumber}/margin-requirements/${underlyingSymbol}/effective`, {}, {});
        return extractResponseData<MarginRequirementResponse>(effectiveMarginRequirements).data;
    }

    async getPositionLimit(accountNumber: string): Promise<PositionLimit> {
        //Get the position limit
        const positionLimit = await this.httpClient.getData(`/accounts/${accountNumber}/position-limit`, {}, {});
        return extractResponseData<PositionLimitResponse>(positionLimit).data;
    }

    //Margin Requirements Public Configuration: Operations about margin-requirements-public-configurations
    async getMarginRequirementsPublicConfiguration(): Promise<MarginRequirementsGlobalConfiguration> {
        //Publicly accessible, read only margin configuration
        const config = await this.httpClient.getData('/margin-requirements-public-configuration', {}, {});
        return extractResponseData<MarginRequirementsGlobalConfigurationResponse>(config).data.item;
    }
}
