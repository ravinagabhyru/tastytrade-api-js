import TransactionsService from "../../../lib/services/transactions-service.js";
import TastytradeHttpClient from "../../../lib/services/tastytrade-http-client.js";
import SessionService from "../../../lib/services/session-service.js";

const client = new TastytradeHttpClient(process.env.BASE_URL!)
const transactionsService = new TransactionsService(client)

beforeAll(async () => {
  const sessionService = new SessionService(client)
  await sessionService.login(process.env.API_USERNAME!, process.env.API_PASSWORD!)
});

describe('getTotalFees', () => {
  it('responds with the correct data', async function() {
    const response = await transactionsService.getTotalFees(process.env.API_ACCOUNT_NUMBER!)
    expect(response).toBeDefined()
  })
})

describe('getAccountTransactions', () => {
  it('responds with the correct data', async function() {
    const response = await transactionsService.getAccountTransactions(process.env.API_ACCOUNT_NUMBER!)
    expect(response).toBeDefined()
  })
})
