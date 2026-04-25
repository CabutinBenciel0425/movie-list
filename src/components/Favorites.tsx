import { FaStar } from "react-icons/fa";
import { useAppContext } from "../hooks/useAppContext";
import { roundOffRating } from "../helpers/utils";

function Favorites() {
  const { favorites, setSelectedMovie, setView } = useAppContext();

  function handleClickFavItem(id: number) {
    setSelectedMovie(id);
    setView("movie");
  }

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
        {favorites.length === 0 && (
          <p className="text-center text-gray-400 py-4">No favorites yet.</p>
        )}

        {favorites.map((fav) => (
          <li
            className="border-b border-b-border-bottom w-full flex flex-row justify-between px-2 py-4 cursor-pointer hover:bg-bg-main-hover transition-all duration-200 ease-in lg:px-4 xl:px-12 xl:text-2xl"
            onClick={() => handleClickFavItem(fav.id)}
          >
            <span className="text-lg font-semibold truncate xl:text-2xl">
              {fav.title}
            </span>
            <div className="flex flex-row gap-2 items-center">
              <span>{roundOffRating(fav.vote_average)}</span>
              <span className="text-lg">
                <FaStar className="text-yellow-400" />
              </span>
            </div>
          </li>
        ))}

        {/* <li className="border-b border-b-border-bottom w-full flex flex-row justify-between px-2 py-4 cursor-pointer hover:bg-bg-main-hover transition-all duration-200 ease-in lg:px-4 xl:px-12 xl:text-2xl">
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
        </li> */}
      </ul>
    </aside>
  );
}

export default Favorites;
