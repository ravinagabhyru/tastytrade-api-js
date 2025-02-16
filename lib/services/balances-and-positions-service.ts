import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { PositionResponse, Position } from "../types/position.js";
import type { BalanceResponse, BalanceSnapshotResponse, Balance } from "../types/balance.js";

export default class BalancesAndPositionsService {
    constructor(private httpClient: TastytradeHttpClient) {
    }
    
    //Positions: Operations about positions
    async getPositionsList(accountNumber: string, queryParams = {}): Promise<Position[]> {
        //Returns a list of the account's positions.
        //Can be filtered by symbol, underlying_symbol
        const positionsList = (await this.httpClient.getData(`/accounts/${accountNumber}/positions`, {}, queryParams)) as PositionResponse;
        return extractResponseData<PositionResponse>(positionsList).data.items;
    }

    //Accounts: Operations about accounts
    async getAccountBalanceValues(accountNumber: string): Promise<Balance> {
        //Returns the current balance values for an account
        const accountBalanceValues = (await this.httpClient.getData(`/accounts/${accountNumber}/balances`, {}, {})) as BalanceResponse;
        return extractResponseData<BalanceResponse>(accountBalanceValues).data;
    }

    //Balance-snapshots Operations about balance-snapshots
    async getBalanceSnapshots(accountNumber: string, queryParams = {}): Promise<Balance[]> {
        //Returns most recent snapshot and current balance for an account
        const balanceSnapshot = (await this.httpClient.getData(`/accounts/${accountNumber}/balance-snapshots`, {}, queryParams)) as BalanceSnapshotResponse;
        return extractResponseData<BalanceSnapshotResponse>(balanceSnapshot).data.items;
    }

    async getBalanceSnapshotsHistory(accountNumber: string): Promise<Balance[]> {
        //Returns the balance snapshots history for an account
        const response = (await this.httpClient.getData(`/accounts/${accountNumber}/balance-snapshots`, {}, {})) as BalanceSnapshotResponse;
        return extractResponseData<BalanceSnapshotResponse>(response).data.items;
    }
}
