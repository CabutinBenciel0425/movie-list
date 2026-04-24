import { IoChevronBack } from "react-icons/io5";
import { TbHeartFilled } from "react-icons/tb";
//TbHeartPlus
import { BASE_IMAGE_URL } from "../helpers/constants";
import { FaStar } from "react-icons/fa6";
import { useWindowSize } from "../hooks/useWindowSize";

function MovieInfo() {
  const [width] = useWindowSize();

  return (
    <div className="flex flex-col gap-3 py-2 px-4 md:px-8 md:py-6 lg:px-10 lg:py-8 lg:text-2xl">
      <div className="w-full flex items-center justify-start">
        <IoChevronBack className="text-2xl text-border-main hover:text-border-secondary cursor-pointer active:scale-95 lg:text-4xl" />
      </div>
      <div className="w-full flex items-center justify-start ">
        <h2 className="text-xl text-gray-600 ml-5 mt-3 lg:text-2xl lg:ml-10">
          Movie Details
        </h2>
      </div>
      <div className="w-full flex items-center justify-end">
        <TbHeartFilled className="text-4xl text-border-main hover:text-border-secondary cursor-pointer active:scale-97 md:text-5xl lg:text-6xl" />
      </div>
      <div className="flex flex-col items-center gap-3 w-full lg:gap-5 xl:flex-row">
        <div className="flex flex-col gap-3 mb-5 xl:flex-row xl:w-2/3">
          <div className="xl:w-1/2">
            <img
              src={`${BASE_IMAGE_URL}/${width < 1024 ? "w154" : "w342"}/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg`}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-1 xl:w-1/2 justify-center xl:gap-10">
            <p className="text-4xl xl:text-6xl">Inception</p>
            <div className="text-gray-500 flex gap-3 text-sm  lg:text-xl">
              <span>15th of July, 2010</span>
              <span>2hr 28min</span>
            </div>
            <p className="flex flex-row gap-3 items-center">
              <span className="mt-1.5 lg:text-2xl">8.4</span>
              <span className="text-lg">
                <FaStar className="text-yellow-400" />
              </span>
            </p>
          </div>
        </div>
        <div className="xl:w-1/3">
          <div>
            <p className="text-lg mb-10 lg:text-2xl">
              "Cobb, a skilled thief who commits corporate espionage by
              infiltrating the subconscious of his targets is offered a chance
              to regain his old life as payment for a task considered to be
              impossible: "inception", the implantation of another person's idea
              into a target's subconscious."
            </p>
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
