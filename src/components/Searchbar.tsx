import { FaSearch, FaStar } from "react-icons/fa";

function Searchbar() {
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <div className="relative">
        <input
          type="text"
          className="border border-border-main rounded-2xl outline-none px-4 py-2 w-60 
              focus:w-100 md:focus:w-120 lg:focus:w-140 
              transition-all duration-200 ease-in-out 
              focus:ring-2 focus:ring-border-secondary"
          placeholder="Search here..."
          spellCheck="false"
        />

        <div className="absolute bg-border-main w-full rounded-2xl px-3 py-2">
          {/* <p className="text-sm text-gray-400 p-2">Searching...</p> */}

          {/* <p className="text-sm text-gray-400 p-2">No results found.</p> */}

          <ul className="flex flex-col overflow-y-auto max-h-60">
            <li
              className={`border-b border-b-border-secondary rounded-md cursor-pointer p-2 flex flex-row justify-between w-full items-center gap-4`}
            >
              <span className="font-semibold w-6/8">Inception</span>
              <span className="text-gray-400 text-sm w-1/8">2010</span>
              <span className="flex flex-row items-center w-1/8 gap-1">
                8.7
                <span className="text-lg -mt-1">
                  <FaStar className="text-yellow-400" />
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center">
        <button>
          <FaSearch className="text-3xl text-border-main cursor-pointer hover:text-border-secondary transition-all duration-200 ease-in" />
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
