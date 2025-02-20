import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
export default class AccountsAndCustomersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async getCustomerAccounts() {
        const accountNumber = (await this.httpClient.getData('/customers/me/accounts', {}, {}));
        return extractResponseData(accountNumber).data.items;
    }
    //Customers: Operations about customers
    async getCustomerResource() {
        //Get a full customer resource.
        const customerResource = (await this.httpClient.getData(`/customers/me`, {}, {}));
        return extractResponseData(customerResource).data;
    }
    async getCustomerAccountResources() {
        //Get a list of all the customer account resources attached to the current customer.
        const customerAccountResources = (await this.httpClient.getData(`/customers/me/accounts`, {}, {}));
        return extractResponseData(customerAccountResources).data.items;
    }
    async getFullCustomerAccountResource(accountNumber) {
        //Get a full customer account resource.
        const fullCustomerAccountResource = (await this.httpClient.getData(`/customers/me/accounts/${accountNumber}`, {}, {}));
        return extractResponseData(fullCustomerAccountResource).data;
    }
    //Returns the appropriate quote streamer endpoint, level and identification token for the current customer to receive market data.
    async getApiQuoteToken() {
        const apiQuoteToken = (await this.httpClient.getData('/api-quote-tokens', {}, {}));
        return extractResponseData(apiQuoteToken);
    }
}
//# sourceMappingURL=accounts-and-customers-service.js.map