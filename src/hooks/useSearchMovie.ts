import { useEffect, useState } from "react";
import type { SearchResultsType } from "../sharedTypes/types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export function useSearchMovie(query: string) {
  const [data, setData] = useState<SearchResultsType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`,
        );

        const data = await res.json();

        setData(data);
      } catch {
        setError("Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return { data, loading, error };
}
