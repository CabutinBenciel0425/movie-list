import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import type { GetMovieType } from "../sharedTypes/types";

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context)
    throw new Error("UseAppContext must be used within AppProvider");

  const {
    view,
    setView,
    searchResults,
    setSearchResults,
    selectedMovie,
    setSelectedMovie,
    favorites,
    dispatchFavorites,
    confirmModal,
    openConfirmModal,
    closeConfirmModal,
  } = context;

  function addFavorite(movie: GetMovieType) {
    dispatchFavorites({
      type: "ADD_FAVORITE",
      payload: movie,
    });
  }

  function removeFavorite(id: number) {
    dispatchFavorites({
      type: "REMOVE_FAVORITE",
      payload: id,
    });
  }

  function clearFavorite() {
    dispatchFavorites({
      type: "CLEAR_FAVORITE",
    });
  }

  return {
    view,
    setView,
    searchResults,
    setSearchResults,
    selectedMovie,
    setSelectedMovie,
    favorites,
    dispatchFavorites,
    addFavorite,
    removeFavorite,
    clearFavorite,
    confirmModal,
    openConfirmModal,
    closeConfirmModal,
  };
}
