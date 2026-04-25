import { IoChevronBack } from "react-icons/io5";
import { TbHeartFilled } from "react-icons/tb";
//TbHeartPlus
import { BASE_IMAGE_URL } from "../helpers/constants";
import { FaStar } from "react-icons/fa6";
import { useWindowSize } from "../hooks/useWindowSize";
import { useAppContext } from "../hooks/useAppContext";
import { useEffect } from "react";
import { useGetMovie } from "../hooks/useGetMovie";
import {
  formatReleaseDate,
  formatRuntime,
  roundOffRating,
} from "../helpers/utils";

function MovieInfo() {
  const [width] = useWindowSize();
  const { selectedMovie, setView, setSelectedMovie } = useAppContext();
  const { fetchMovie, data } = useGetMovie();

  function handleBack() {
    setSelectedMovie(null);
    setView("search");
  }

  useEffect(() => {
    if (selectedMovie) {
      fetchMovie(selectedMovie);
    }
  }, [selectedMovie, fetchMovie]);
  console.log(data);

  if (!data) {
    return <p className="text-center mt-10">Loading movie...</p>;
  }

  console.log("selectedMovie:", selectedMovie);
  console.log("data:", data);
  return (
    <div className="flex flex-col gap-3 py-2 px-4 md:px-8 md:py-6 lg:px-10 lg:py-8 lg:text-2xl">
      <div
        className="w-full flex items-center justify-start"
        onClick={handleBack}
      >
        <IoChevronBack className="text-2xl text-border-main hover:text-border-secondary cursor-pointer active:scale-95 lg:text-4xl" />
      </div>
      <div className="w-full flex items-center justify-start ">
        <h2 className="text-2xl text-gray-600 ml-5 mt-3 lg:text-3xl lg:ml-10 font-semibold">
          Movie Details
        </h2>
      </div>
      <div className="w-full flex items-center justify-end">
        <TbHeartFilled className="text-4xl text-border-main hover:text-border-secondary cursor-pointer active:scale-97 md:text-5xl lg:text-6xl" />
      </div>
      <div className="flex flex-col items-center gap-3 w-full lg:gap-5 xl:flex-row">
        <div className="flex flex-col gap-3 mb-5 xl:flex-row xl:w-2/3">
          <div className="xl:w-1/2">
            {/* <img
              src={`${BASE_IMAGE_URL}/${width < 1024 ? "w154" : "w342"}/${data?.poster_path}`}
              alt=""
            /> */}
            <img
              src={
                data?.poster_path
                  ? `${BASE_IMAGE_URL}/${width < 1024 ? "w154" : "w342"}/${data?.poster_path}`
                  : `${width < 1024 ? "https://placehold.co/154x231" : "https://placehold.co/342x513"}`
              }
            />
          </div>
          <div className="flex flex-col items-center gap-1 xl:w-1/2 justify-center xl:gap-10">
            <p className="text-4xl xl:text-6xl text-center">{data?.title}</p>
            <div className="text-gray-500 flex gap-3 text-sm  lg:text-xl">
              <span>
                {data?.release_date && formatReleaseDate(data.release_date)}
              </span>
              <span>{data?.runtime && formatRuntime(data.runtime)}</span>
            </div>
            <p className="flex flex-row gap-3 items-center">
              <span className="mt-1.5 lg:text-2xl">
                {data?.vote_average && roundOffRating(data?.vote_average)}
              </span>
              <span className="text-lg">
                <FaStar className="text-yellow-400" />
              </span>
            </p>
          </div>
        </div>
        <div className="xl:w-1/3">
          <div>
            <p className="text-lg mb-10 lg:text-2xl">"{data?.overview}"</p>
          </div>

          <div className="w-full lg:text-2xl">
            <p>
              <span className="font-semibold pb-5">Genres</span>: Action,
              Science Fiction, Adventure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
