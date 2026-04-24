export type MovieType = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SearchResponseType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

export type GetMovieType = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: GetMovie_MovieCollectionType | null;
  budget: number;
  genres: GetMovieGenreType[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: GetMovie_ProductionCompanyType | null;
  production_countries: GetMovie_ProductionCountryType | null;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_langunges: GetMovie_SpokenLanguagesType[] | null;
  status: string;
  tagline: string;
  title: string;
  video: string;
  vote_average: number;
  vote_count: number;
};

export type GetMovieGenreType = {
  id: number;
  name: string;
};

type GetMovie_MovieCollectionType = {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
};

type GetMovie_ProductionCompanyType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type GetMovie_ProductionCountryType = {
  iso_3166_1: string;
  name: string;
};

type GetMovie_SpokenLanguagesType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
