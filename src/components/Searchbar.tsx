import { FaSearch } from "react-icons/fa";

function Searchbar() {
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <div className="relative">
        <input
          type="text"
          className="border border-border-main rounded-2xl outline-none px-4 py-2"
          placeholder="Search here..."
        />
        {/* <div className="absolute bg-border-main w-full rounded-2xl px-3 py-2">
          <ul
            className="flex flex-col gap-2 overflow-y-auto max-h-40"
          >
            <li className="border-b border-b-border-secondary">Inception</li>
            <li className="border-b border-b-border-secondary">
              Shutter Island
            </li>
            <li className="border-b border-b-border-secondary">Forgotten</li>
            <li className="border-b border-b-border-secondary">Interstellar</li>
            <li className="border-b border-b-border-secondary">Interstellar</li>
            <li className="border-b border-b-border-secondary">Interstellar</li>
          </ul>
        </div> */}
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
