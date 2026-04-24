import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context)
    throw new Error("UseAppContext must be used within AppProvider");

  const {
    searchResults,
    setSearchResults,
    selectedMovie,
    setSelectedMovie,
    favorites,
    dispatchFavorites,
  } = context;

  return {
    searchResults,
    setSearchResults,
    selectedMovie,
    setSelectedMovie,
    favorites,
    dispatchFavorites,
  };
}
