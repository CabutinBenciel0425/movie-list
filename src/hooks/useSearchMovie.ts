import { useCallback, useState } from "react";
import type { SearchResponseType } from "../sharedTypes/types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export function useSearchMovie(
  setSearchResults?: React.Dispatch<
    React.SetStateAction<SearchResponseType | null>
  >,
) {
  const [data, setData] = useState<SearchResponseType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSearchedMovie = useCallback(
    async (query: string) => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`,
        );

        const data = await res.json();
        setData(data);

        if (setSearchResults) {
          setSearchResults(data);
        }
      } catch {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    },
    [setSearchResults],
  );

  return { data, loading, error, fetchSearchedMovie };
}
