import TastytradeHttpClient from "./tastytrade-http-client.js";
import type { Watchlist, PairsWatchlist, PublicWatchlist } from "../types/watchlists.js";
export default class WatchlistsService {
    private httpClient;
    constructor(httpClient: TastytradeHttpClient);
    getPairsWatchlists(): Promise<PairsWatchlist[]>;
    getPairsWatchlist(pairsWatchlistName: string): Promise<PairsWatchlist>;
    getPublicWatchlists(countsOnly?: boolean): Promise<PublicWatchlist[]>;
    getPublicWatchlist(watchlistName: string): Promise<PublicWatchlist>;
    createAccountWatchlist(watchlist: Partial<Watchlist>): Promise<Watchlist>;
    getAllWatchlists(): Promise<Watchlist[]>;
    replaceWatchlist(watchlistName: string, replacementWatchlist: Partial<Watchlist>): Promise<Watchlist>;
    deleteWatchlist(watchlistName: string): Promise<Watchlist>;
    getSingleWatchlist(watchlistName: string): Promise<Watchlist>;
}
//# sourceMappingURL=watchlists-service.d.ts.map