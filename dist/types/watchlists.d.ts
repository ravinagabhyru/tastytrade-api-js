export interface WatchlistSymbol {
    symbol: string;
    instrument_type: string;
}
export interface Watchlist {
    name: string;
    description?: string;
    symbols: WatchlistSymbol[];
}
export interface WatchlistResponse {
    data: Watchlist;
    context: string;
}
export interface WatchlistsResponse {
    data: {
        items: Watchlist[];
    };
    context: string;
}
export interface PairsWatchlistSymbol {
    symbol1: string;
    symbol2: string;
    instrument_type: string;
}
export interface PairsWatchlist {
    name: string;
    description?: string;
    pairs: PairsWatchlistSymbol[];
}
export interface PairsWatchlistResponse {
    data: PairsWatchlist;
    context: string;
}
export interface PairsWatchlistsResponse {
    data: {
        items: PairsWatchlist[];
    };
    context: string;
}
export interface PublicWatchlist extends Watchlist {
    group: string;
}
export interface PublicWatchlistResponse {
    data: PublicWatchlist;
    context: string;
}
export interface PublicWatchlistsResponse {
    data: {
        items: PublicWatchlist[];
    };
    context: string;
}
//# sourceMappingURL=watchlists.d.ts.map