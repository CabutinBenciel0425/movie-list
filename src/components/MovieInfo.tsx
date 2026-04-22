import { useGetMovie } from "../hooks/useGetMovie";
import { IoChevronBack } from "react-icons/io5";
import { TbHeartPlus, TbHeartFilled } from "react-icons/tb";
import { BASE_IMAGE_URL } from "../helpers/constants";

function MovieInfo() {
  console.log(useGetMovie(27205));
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex items-center justify-start">
        <IoChevronBack className="text-2xl text-border-main hover:text-border-secondary cursor-pointer active:scale-95" />
      </div>
      <div className="w-full flex items-center justify-end">
        <TbHeartFilled className="text-4xl text-border-main hover:text-border-secondary cursor-pointer active:scale-97" />
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <div className="flex flex-col gap-3 mb-5">
          <div>
            <img
              src={`${BASE_IMAGE_URL}/w200/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg`}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-4xl">Inception</p>
            <div className="text-gray-500 flex gap-3 text-sm">
              <span>15th of July, 2010</span>
              <span>2hr 28min</span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg">
            "Cobb, a skilled thief who commits corporate espionage by
            infiltrating the subconscious of his targets is offered a chance to
            regain his old life as payment for a task considered to be
            impossible: "inception", the implantation of another person's idea
            into a target's subconscious."
          </p>
        </div>

        <div className="w-full">
          <p>
            <span className="font-semibold">Genres</span>: Action, Science
            Fiction, Adventure
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
