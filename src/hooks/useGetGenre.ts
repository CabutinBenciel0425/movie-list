import { useState } from "react";
import { BASE_URL } from "../helpers/constants";
import type { GetMovieGenreType } from "../sharedTypes/types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export function useGetGenre() {
  const [genreMap, setGenreMap] = useState<Record<number, string[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchGenres(movieId: number, genresId: number[]) {
    if (genresId.length === 0) return;

    try {
      setLoading(true);
      const res = await fetch(
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
      );
      const data = await res.json();
      const genreArray: GetMovieGenreType[] = data.genres;

      const matchedNames = genresId
        .map((id) => genreArray.find((g) => g.id === id)?.name ?? null)
        .filter((name): name is string => name !== null);

      setGenreMap((prev) => ({ ...prev, [movieId]: matchedNames }));
    } catch {
      setError("Failed to fetch the genres");
    } finally {
      setLoading(false);
    }
  }

  return { genreMap, loading, error, fetchGenres };
}
