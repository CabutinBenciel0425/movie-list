import type { FavoritesActionTypes, GetMovieType } from "../sharedTypes/types";

export function favoritesReducer(
  state: GetMovieType[],
  action: FavoritesActionTypes,
) {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (state.some((m) => m.id === action.payload.id)) return state;
      return [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter((m) => m.id !== action.payload);
    case "CLEAR_FAVORITE":
      return [];
    default:
      return state;
  }
}
