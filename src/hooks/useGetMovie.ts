import { useState } from "react";
import type { GetMovieType } from "../sharedTypes/types";
import { BASE_URL } from "../helpers/constants";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export function useGetMovie() {
  const [data, setData] = useState<GetMovieType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchMovie(id: number) {
    if (!id) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
      );
      const data = await res.json();
      setData(data);
    } catch {
      setError("Failed to fetch movie");
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, fetchMovie };
}
