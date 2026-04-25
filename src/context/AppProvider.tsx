import { useReducer, useState } from "react";
import type { AppView, SearchResponseType } from "../sharedTypes/types";
import { favoritesReducer } from "../reducer/AppReducer";
import { AppContext } from "./AppContext";

const defaultConfirmModal = {
  isOpen: false,
  title: "",
  message: "",
  confirmText: "Confirm",
  cancelText: "Cancel",
  onConfirm: () => {},
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [searchResults, setSearchResults] = useState<SearchResponseType | null>(
    null,
  );
  const [view, setView] = useState<AppView>("none");
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);
  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, []);
  const [confirmModal, setConfirmModal] = useState(defaultConfirmModal);

  function openConfirmModal(params: {
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
  }) {
    setConfirmModal({
      isOpen: true,
      title: params.title ?? "",
      message: params.message,
      confirmText: params.confirmText ?? "Confirm",
      cancelText: params.cancelText ?? "Cancel",
      onConfirm: params.onConfirm,
    });
  }

  function closeConfirmModal() {
    setConfirmModal(defaultConfirmModal);
  }

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

        confirmModal,
        openConfirmModal,
        closeConfirmModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
