import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { Position } from "../types/position.js";
import type { Balance } from "../types/balance.js";
export default class BalancesAndPositionsService {
    private httpClient;
    constructor(httpClient: TastytradeHttpClient);
    getPositionsList(accountNumber: string, queryParams?: {}): Promise<Position[]>;
    getAccountBalanceValues(accountNumber: string): Promise<Balance>;
    getBalanceSnapshots(accountNumber: string, queryParams?: {}): Promise<Balance[]>;
    getBalanceSnapshotsHistory(accountNumber: string): Promise<Balance[]>;
}
//# sourceMappingURL=balances-and-positions-service.d.ts.map