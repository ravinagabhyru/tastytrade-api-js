import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
export default class MarginRequirementsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    //Margin-requirements: Allows a client to fetch margin-requirements for positions and orders
    async getMarginRequirements(accountNumber) {
        //Fetch current margin/captial requirements report for an account
        const marginRequirements = await this.httpClient.getData(`/margin/accounts/${accountNumber}/requirements`);
        return extractResponseData(marginRequirements).data;
    }
    // TODO: DryRunMarginRequirementResponse is not correct - to be fixed
    async postMarginRequirements(accountNumber, order) {
        //Estimate margin requirements for an order given an account
        const marginRequirements = await this.httpClient.postData(`/margin/accounts/${accountNumber}/dry-run`, order, {});
        return extractResponseData(marginRequirements).data;
    }
}
//# sourceMappingURL=margin-requirements-service.js.map