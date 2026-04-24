import type { MovieType } from "../sharedTypes/types";

type dateObjTypes = {
  year: string;
  month: string;
  day: string;
};

type runtimeObjTypes = {
  hr: number;
  min: number;
};

export type GetTitlesReturnType = {
  title: string;
  year: string;
  rating: string;
  id: number;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function roundOffRating(rating: number) {
  return rating.toFixed(1);
}

export function formatReleaseDate(releaseDate: string) {
  const dateObj: dateObjTypes = {
    year: "",
    month: "",
    day: "",
  };
  const splitDate = releaseDate.split("-");
  dateObj.year = splitDate[0];
  dateObj.month = months[Number(splitDate[1]) - 1];
  dateObj.day = splitDate[2];

  const dayNumber = Number(dateObj.day);
  let daySuffix = "th";

  if (dayNumber === 1 || dayNumber === 21 || dayNumber === 31) {
    daySuffix = "st";
  } else if (dayNumber === 2 || dayNumber === 22) {
    daySuffix = "nd";
  } else if (dayNumber === 3 || dayNumber === 23) {
    daySuffix = "rd";
  }

  return `${dayNumber}${daySuffix} of ${dateObj.month}, ${dateObj.year}`;
}

export function formatRuntime(runtime: number) {
  const runtimeObj: runtimeObjTypes = {
    hr: 0,
    min: 0,
  };
  const hr = runtime / 60;
  const min = runtime % 60;

  runtimeObj.hr = hr;
  runtimeObj.min = min;

  const strHour =
    runtimeObj.hr > 1 ? `${runtimeObj.hr}hrs` : `${runtimeObj.hr}hr`;
  const strMinutes =
    runtimeObj.min > 1 ? `${runtimeObj.min}mins` : `${runtimeObj.min}min`;

  return `${strHour} ${strMinutes}`;
}

export function getTitles(data: MovieType[]): GetTitlesReturnType[] {
  return data.map((movie) => ({
    title: movie.title,
    year: movie.release_date.split("-")[0],
    rating: roundOffRating(movie.vote_average),
    id: movie.id,
  }));
}
