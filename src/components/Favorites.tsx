import { FaStar } from "react-icons/fa";

function Favorites() {
  return (
    <aside
      style={{ gridArea: "sidebar" }}
      className="border border-border-main"
    >
      <div className="w-full flex items-center justify-start">
        <h2 className="text-2xl text-gray-600 mx-auto py-5 lg:text-3xl font-semibold">
          Favorites
        </h2>
      </div>

      <ul>
        <li className="border-b border-b-border-bottom w-full flex flex-row justify-between px-2 py-4 cursor-pointer hover:bg-bg-main-hover transition-all duration-200 ease-in lg:px-4 xl:px-12 xl:text-2xl">
          <span className="text-lg font-semibold truncate xl:text-2xl">
            Inception
          </span>
          <div className="flex flex-row gap-2 items-center">
            <span>8.4</span>
            <span className="text-lg">
              <FaStar className="text-yellow-400" />
            </span>
          </div>
        </li>
        <li className="border-b border-b-border-bottom w-full flex flex-row justify-between px-2 py-4 cursor-pointer hover:bg-bg-main-hover transition-all duration-200 ease-in lg:px-4 xl:px-12 xl:text-2xl">
          <span className="text-lg font-semibold truncate xl:text-2xl">
            Shutter Island
          </span>
          <div className="flex flex-row gap-2 items-center">
            <span>9.1</span>
            <span className="text-lg">
              <FaStar className="text-yellow-400" />
            </span>
          </div>
        </li>
        <li className="border-b border-b-border-bottom w-full flex flex-row justify-between px-2 py-4 cursor-pointer hover:bg-bg-main-hover transition-all duration-200 ease-in lg:px-4 xl:px-12 xl:text-2xl">
          <span className="text-lg font-semibold xl:text-2xl">Forgotten</span>
          <div className="flex flex-row gap-2  items-center">
            <span>7.9</span>
            <span className="text-lg">
              <FaStar className="text-yellow-400" />
            </span>
          </div>
        </li>
        <li className="border-b border-b-border-bottom w-full flex flex-row justify-between px-2 py-4 cursor-pointer hover:bg-bg-main-hover transition-all duration-200 ease-in lg:px-4 xl:px-12 xl:text-2xl">
          <span className="text-lg font-semibold xl:text-2xl">
            Interstellar
          </span>
          <div className="flex flex-row gap-2  items-center">
            <span>8.7</span>
            <span className="text-lg">
              <FaStar className="text-yellow-400" />
            </span>
          </div>
        </li>
      </ul>
    </aside>
  );
}

export default Favorites;
