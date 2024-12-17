import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { Transaction, TransactionsResponse, SingleTransactionResponse, TransactionFeesResponse } from "../types/transaction.js";

export default class TransactionsService {
    constructor(private httpClient: TastytradeHttpClient) {
    }

    //Accounts: Operations about Accounts
    async getTransaction(accountNumber: string, id: string): Promise<Transaction> {
        //Retrieve a transaction by account number and ID
        const symbolData = (await this.httpClient.getData(`/accounts/${accountNumber}/transactions/${id}`, {}, {})) as SingleTransactionResponse;
        return extractResponseData<SingleTransactionResponse>(symbolData).data;
    }

    async getTotalFees(accountNumber: string): Promise<{ 'total-fees': string; 'total-fees-effect': string }> {
        //Return the total fees for an account for a given day
        const totalFees = (await this.httpClient.getData(`/accounts/${accountNumber}/transactions/total-fees`, {}, {})) as TransactionFeesResponse;
        return extractResponseData<TransactionFeesResponse>(totalFees).data;
    }

    //Transactions: Operations about transactions
    async getAccountTransactions(accountNumber: string, queryParams = {}): Promise<{ items: Transaction[]; pagination: TransactionsResponse['pagination'] }> {
        //Returns a paginated list of the account's transactions (as identified by the provided authentication token) 
        //based on sort param. If no sort is passed in, it defaults to descending order.
        const accountTransactions = (await this.httpClient.getData(`/accounts/${accountNumber}/transactions`, {}, queryParams)) as TransactionsResponse;
        const response = extractResponseData<TransactionsResponse>(accountTransactions);
        return {
            items: response.data.items,
            pagination: response.pagination
        };
    }
}
