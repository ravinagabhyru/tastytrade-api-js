import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { AccountStatus } from "../types/account-status.js";
export default class AccountStatusService {
    private httpClient;
    constructor(httpClient: TastytradeHttpClient);
    getAccountStatus(accountNumber: string): Promise<AccountStatus>;
}
//# sourceMappingURL=account-status-service.d.ts.map