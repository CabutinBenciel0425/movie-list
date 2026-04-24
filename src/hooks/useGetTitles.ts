import { roundOffRating } from "../helpers/utils";
import type { MovieType } from "../sharedTypes/types";

type GetTitlesReturnType = {
  title: string;
  year: string;
  rating: string;
  id: number;
};

export function useGetTitles(data: MovieType[]): GetTitlesReturnType[] {
  return data.map((movie) => ({
    title: movie.title,
    year: movie.release_date.split("-")[0],
    rating: roundOffRating(movie.vote_average),
    id: movie.id,
  }));
}
