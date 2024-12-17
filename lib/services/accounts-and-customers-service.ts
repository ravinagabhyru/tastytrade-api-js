import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { CustomerResponse, Customer } from "../types/customer.js";
import type { CustomerAccountsResponse, SingleAccountResponse, Account, AccountWithAuthority } from "../types/account.js";

export default class AccountsAndCustomersService {
    constructor(private httpClient: TastytradeHttpClient) {
    }
    async getCustomerAccounts(): Promise<AccountWithAuthority[]> {
        const accountNumber = (await this.httpClient.getData('/customers/me/accounts', {}, {})) as CustomerAccountsResponse
        return extractResponseData<CustomerAccountsResponse>(accountNumber).data.items
    }

    //Customers: Operations about customers
    async getCustomerResource(): Promise<Customer> {
        //Get a full customer resource.
        const customerResource = (await this.httpClient.getData(`/customers/me`, {}, {})) as CustomerResponse
        return extractResponseData<CustomerResponse>(customerResource).data
    }
    async getCustomerAccountResources(): Promise<AccountWithAuthority[]> {
        //Get a list of all the customer account resources attached to the current customer.
        const customerAccountResources = (await this.httpClient.getData(`/customers/me/accounts`, {}, {})) as CustomerAccountsResponse
        return extractResponseData<CustomerAccountsResponse>(customerAccountResources).data.items
    }
    async getFullCustomerAccountResource(accountNumber: string): Promise<Account> {
        //Get a full customer account resource.
        const fullCustomerAccountResource = (await this.httpClient.getData(`/customers/me/accounts/${accountNumber}`, {}, {})) as SingleAccountResponse
        return extractResponseData<SingleAccountResponse>(fullCustomerAccountResource).data
    }

    //Returns the appropriate quote streamer endpoint, level and identification token for the current customer to receive market data.
    async getApiQuoteToken() {
        const apiQuoteToken = (await this.httpClient.getData('/api-quote-tokens', {}, {}))
        return extractResponseData(apiQuoteToken)
    }
}
