import SymbolSearchService from "../../../lib/services/symbol-search-service.js";
import TastytradeHttpClient from "../../../lib/services/tastytrade-http-client.js";
import SessionService from "../../../lib/services/session-service.js";
import nock from 'nock';

const BASE_URL = process.env.BASE_URL!;
const client = new TastytradeHttpClient(BASE_URL);
const symbolSearchService = new SymbolSearchService(client);

beforeAll(async () => {
  const sessionService = new SessionService(client)
  await sessionService.login(process.env.API_USERNAME!, process.env.API_PASSWORD!)
});

describe('getSymbolData', () => {
  // symbol search is not supported in the sandbox environment.
  it.skip('responds with the correct data', async function() {
    const equitySymbol = 'AAPL'
    const response = await symbolSearchService.getSymbolData(equitySymbol)
    expect(response).toBeDefined()
    //Not sure what else it should be checking.
  })
})
