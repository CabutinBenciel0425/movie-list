import { useReducer, useState } from "react";
import type { AppView, SearchResponseType } from "../sharedTypes/types";
import { favoritesReducer } from "../reducer/AppReducer";
import { AppContext } from "./AppContext";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [searchResults, setSearchResults] = useState<SearchResponseType | null>(
    null,
  );
  const [view, setView] = useState<AppView>("none");
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);
  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, []);

  return (
    <AppContext.Provider
      value={{
        view,
        setView,
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
