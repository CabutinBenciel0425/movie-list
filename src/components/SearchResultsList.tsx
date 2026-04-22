import { BASE_IMAGE_URL } from "../helpers/constants";

function SearchResultsList() {
  return (
    <div>
      <ul className="flex flex-col gap-2 overflow-y-auto max-h-196">
        <li className="cursor-pointer border-b-3 border-b-border-bottom flex flex-row items-center justify-around gap-4 py-2 hover:bg-bg-main-hover rounded-md h-full">
          <div>
            <img
              src={`${BASE_IMAGE_URL}/w92/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg`}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Inception</p>
            <p className="text-gray-500">2010</p>
          </div>
          <div className="italic text-wrap">
            Action, Science Fiction, Adventure
          </div>
        </li>

        <li className="cursor-pointer border-b-3 border-b-border-bottom flex flex-row items-center justify-around gap-4 py-2 hover:bg-bg-main-hover rounded-md">
          <div>
            <img
              src={`${BASE_IMAGE_URL}/w92/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg`}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Inception</p>
            <p className="text-gray-500">15th of July, 2010</p>
          </div>
          <div className="italic text-wrap">
            Action, Science Fiction, Adventure
          </div>
        </li>

        <li className="cursor-pointer border-b-3 border-b-border-bottom flex flex-row items-center justify-around gap-4 py-2 hover:bg-bg-main-hover rounded-md">
          <div>
            <img
              src={`${BASE_IMAGE_URL}/w92/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg`}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Inception</p>
            <p className="text-gray-500">15th of July, 2010</p>
          </div>
          <div className="italic text-wrap">
            Action, Science Fiction, Adventure
          </div>
        </li>

        <li className="cursor-pointer border-b-3 border-b-border-bottom flex flex-row items-center justify-around gap-4 py-2 hover:bg-bg-main-hover rounded-md">
          <div>
            <img
              src={`${BASE_IMAGE_URL}/w92/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg`}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Inception</p>
            <p className="text-gray-500">15th of July, 2010</p>
          </div>
          <div className="italic text-wrap">
            Action, Science Fiction, Adventure
          </div>
        </li>

        <li className="cursor-pointer border-b-3 border-b-border-bottom flex flex-row items-center justify-around gap-4 py-2 hover:bg-bg-main-hover rounded-md">
          <div>
            <img
              src={`${BASE_IMAGE_URL}/w92/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg`}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Inception</p>
            <p className="text-gray-500">15th of July, 2010</p>
          </div>
          <div className="italic text-wrap">
            Action, Science Fiction, Adventure
          </div>
        </li>

        <li className="cursor-pointer border-b-3 border-b-border-bottom flex flex-row items-center justify-around gap-4 py-2 hover:bg-bg-main-hover rounded-md">
          <div>
            <img
              src={`${BASE_IMAGE_URL}/w92/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg`}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">Inception</p>
            <p className="text-gray-500">15th of July, 2010</p>
          </div>
          <div className="italic text-wrap">
            Action, Science Fiction, Adventure
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SearchResultsList;
