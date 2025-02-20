import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
export default class RiskParametersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    //Accounts: Operations about accounts
    async getEffectiveMarginRequirements(accountNumber, underlyingSymbol) {
        //Get effective margin requirements for account
        const effectiveMarginRequirements = await this.httpClient.getData(`/accounts/${accountNumber}/margin-requirements/${underlyingSymbol}/effective`, {}, {});
        return extractResponseData(effectiveMarginRequirements).data;
    }
    async getPositionLimit(accountNumber) {
        //Get the position limit
        const positionLimit = await this.httpClient.getData(`/accounts/${accountNumber}/position-limit`, {}, {});
        return extractResponseData(positionLimit).data;
    }
    //Margin Requirements Public Configuration: Operations about margin-requirements-public-configurations
    async getMarginRequirementsPublicConfiguration() {
        //Publicly accessible, read only margin configuration
        const config = await this.httpClient.getData('/margin-requirements-public-configuration', {}, {});
        return extractResponseData(config).data.item;
    }
}
//# sourceMappingURL=risk-parameters-service.js.map