import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { Customer } from "../types/customer.js";
import type { Account, AccountWithAuthority } from "../types/account.js";
export default class AccountsAndCustomersService {
    private httpClient;
    constructor(httpClient: TastytradeHttpClient);
    getCustomerAccounts(): Promise<AccountWithAuthority[]>;
    getCustomerResource(): Promise<Customer>;
    getCustomerAccountResources(): Promise<AccountWithAuthority[]>;
    getFullCustomerAccountResource(accountNumber: string): Promise<Account>;
    getApiQuoteToken(): Promise<unknown>;
}
//# sourceMappingURL=accounts-and-customers-service.d.ts.map