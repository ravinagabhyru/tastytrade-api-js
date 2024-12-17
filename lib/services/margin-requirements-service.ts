import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { MarginRequirement, MarginRequirementResponse, DryRunMarginRequirement, DryRunMarginRequirementResponse } from "../types/margin-requirements.js";

export default class MarginRequirementsService {
    constructor(private httpClient: TastytradeHttpClient) {
    }

    //Margin-requirements: Allows a client to fetch margin-requirements for positions and orders
    async getMarginRequirements(accountNumber: string): Promise<MarginRequirement> {
        //Fetch current margin/captial requirements report for an account
        const marginRequirements = await this.httpClient.getData(`/margin/accounts/${accountNumber}/requirements`);
        return extractResponseData<MarginRequirementResponse>(marginRequirements).data;
    }

    // TODO: DryRunMarginRequirementResponse is not correct - to be fixed
    async postMarginRequirements(accountNumber: string, order: object): Promise<DryRunMarginRequirement> {
        //Estimate margin requirements for an order given an account
        const marginRequirements = await this.httpClient.postData(`/margin/accounts/${accountNumber}/dry-run`, order, {});
        return extractResponseData<DryRunMarginRequirementResponse>(marginRequirements).data;
    }
}
