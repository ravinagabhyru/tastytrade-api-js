import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { Transaction, TransactionsResponse } from "../types/transaction.js";
export default class TransactionsService {
    private httpClient;
    constructor(httpClient: TastytradeHttpClient);
    getTransaction(accountNumber: string, id: string): Promise<Transaction>;
    getTotalFees(accountNumber: string): Promise<{
        'total-fees': string;
        'total-fees-effect': string;
    }>;
    getAccountTransactions(accountNumber: string, queryParams?: {}): Promise<{
        items: Transaction[];
        pagination: TransactionsResponse['pagination'];
    }>;
}
//# sourceMappingURL=transactions-service.d.ts.map