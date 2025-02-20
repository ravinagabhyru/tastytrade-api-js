import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
export default class BalancesAndPositionsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    //Positions: Operations about positions
    async getPositionsList(accountNumber, queryParams = {}) {
        //Returns a list of the account's positions.
        //Can be filtered by symbol, underlying_symbol
        const positionsList = (await this.httpClient.getData(`/accounts/${accountNumber}/positions`, {}, queryParams));
        return extractResponseData(positionsList).data.items;
    }
    //Accounts: Operations about accounts
    async getAccountBalanceValues(accountNumber) {
        //Returns the current balance values for an account
        const accountBalanceValues = (await this.httpClient.getData(`/accounts/${accountNumber}/balances`, {}, {}));
        return extractResponseData(accountBalanceValues).data;
    }
    //Balance-snapshots Operations about balance-snapshots
    async getBalanceSnapshots(accountNumber, queryParams = {}) {
        //Returns most recent snapshot and current balance for an account
        const balanceSnapshot = (await this.httpClient.getData(`/accounts/${accountNumber}/balance-snapshots`, {}, queryParams));
        return extractResponseData(balanceSnapshot).data.items;
    }
    async getBalanceSnapshotsHistory(accountNumber) {
        //Returns the balance snapshots history for an account
        const response = (await this.httpClient.getData(`/accounts/${accountNumber}/balance-snapshots`, {}, {}));
        return extractResponseData(response).data.items;
    }
}
//# sourceMappingURL=balances-and-positions-service.js.map