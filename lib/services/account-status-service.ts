import TastytradeHttpClient from "./tastytrade-http-client.js";
import extractResponseData from "../utils/response-util.js";
import type {AccountStatus, AccountStatusResponse} from "../types/account-status.js";


// create the central class that aggregates all services
export default class AccountStatusService {
    constructor(private httpClient: TastytradeHttpClient) {
    }

    //Trading Status: Allows an API client to request information about the basic trade status of an account. This includes information about the strategies an account can trade. 
    async getAccountStatus(accountNumber: string): Promise<AccountStatus> {
        //Returns current trading status for an account.
        const response =  (await this.httpClient.getData(`/accounts/${accountNumber}/trading-status`, {}, {}))
        return extractResponseData<AccountStatusResponse>(response).data
    }
}
