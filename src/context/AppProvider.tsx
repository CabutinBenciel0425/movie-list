import { useReducer, useState } from "react";
import type { GetMovieType, SearchResponseType } from "../sharedTypes/types";
import { favoritesReducer } from "../reducer/AppReducer";
import { AppContext } from "./AppContext";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [searchResults, setSearchResults] = useState<SearchResponseType | null>(
    null,
  );
  const [selectedMovie, setSelectedMovie] = useState<GetMovieType | null>(null);
  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, []);

  return (
    <AppContext.Provider
      value={{
        searchResults,
        setSearchResults,
        selectedMovie,
        setSelectedMovie,
        favorites,
        dispatchFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
