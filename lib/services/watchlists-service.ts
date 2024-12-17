import extractResponseData from "../utils/response-util.js";
import TastytradeHttpClient from "./tastytrade-http-client.js";
import type {
    Watchlist, WatchlistResponse, WatchlistsResponse,
    PairsWatchlist, PairsWatchlistResponse, PairsWatchlistsResponse,
    PublicWatchlist, PublicWatchlistResponse, PublicWatchlistsResponse
} from "../types/watchlists.js";

export default class WatchlistsService {
    constructor(private httpClient: TastytradeHttpClient) {
    }

    //Pairs Watchlists: Allows an API client to fetch pairs watchlists.
    async getPairsWatchlists(): Promise<PairsWatchlist[]> {
        //Returns a list of all tastyworks pairs watchlists
        const pairsWatchlists = await this.httpClient.getData('/pairs-watchlists', {}, {});
        return extractResponseData<PairsWatchlistsResponse>(pairsWatchlists).data.items;
    }

    async getPairsWatchlist(pairsWatchlistName: string): Promise<PairsWatchlist> {
        //Returns a requested tastyworks pairs watchlist
        const pairsWatchlist = await this.httpClient.getData(`/pairs-watchlists/${pairsWatchlistName}`, {}, {});
        return extractResponseData<PairsWatchlistResponse>(pairsWatchlist).data;
    }

    //Public Watchlists: Allows an API client to fetch tastyworks watchlists.
    async getPublicWatchlists(countsOnly = false): Promise<PublicWatchlist[]> {
        //Returns a list of all tastyworks watchlists
        const publicWatchlists = await this.httpClient.getData('/public-watchlists', {}, {'counts-only': countsOnly });
        return extractResponseData<PublicWatchlistsResponse>(publicWatchlists).data.items;
    }

    async getPublicWatchlist(watchlistName: string): Promise<PublicWatchlist> {
        //Returns a requested tastyworks watchlist
        const publicWatchlist = await this.httpClient.getData(`/public-watchlists/${watchlistName}`, {}, {});
        return extractResponseData<PublicWatchlistResponse>(publicWatchlist).data;
    }

    //User Watchlists: Allows an API client to fetch a user's watchlists.
    async createAccountWatchlist(watchlist: Partial<Watchlist>): Promise<Watchlist> {
        //Create an account watchlist
        const accountWatchlist = await this.httpClient.postData('/watchlists', watchlist, {});
        return extractResponseData<WatchlistResponse>(accountWatchlist).data;
    }

    async getAllWatchlists(): Promise<Watchlist[]> {
        //Returns a list of all watchlists for the given account
        const allWatchlists = await this.httpClient.getData('/watchlists', {}, {});
        return extractResponseData<WatchlistsResponse>(allWatchlists).data.items;
    }

    async replaceWatchlist(watchlistName: string, replacementWatchlist: Partial<Watchlist>): Promise<Watchlist> {
        //Replace all properties of an account watchlist
        const watchlist = await this.httpClient.putData(`/watchlists/${watchlistName}`, replacementWatchlist, {});
        return extractResponseData<WatchlistResponse>(watchlist).data;
    }

    async deleteWatchlist(watchlistName: string): Promise<Watchlist> {
        //Delete a watchlist for the given account
        const watchlist = await this.httpClient.deleteData(`/watchlists/${watchlistName}`, {});
        return extractResponseData<WatchlistResponse>(watchlist).data;
    }

    async getSingleWatchlist(watchlistName: string): Promise<Watchlist> {
        //Returns a requested account watchlist
        const singleWatchlist = await this.httpClient.getData(`/watchlists/${watchlistName}`, {}, {});
        return extractResponseData<WatchlistResponse>(singleWatchlist).data;
    }
}
