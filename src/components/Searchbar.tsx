import debounce from "lodash/debounce";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import { useSearchMovie } from "../hooks/useSearchMovie";
import { useAppContext } from "../hooks/useAppContext";
import { getTitles, roundOffRating } from "../helpers/utils";

function Searchbar() {
  const [inputValue, setInputValue] = useState<string>("");
  const [resultsOpen, setResultsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { setSearchResults, searchResults } = useAppContext();
  const { fetchSearchedMovie, loading, error } =
    useSearchMovie(setSearchResults);

  const debouncedFetch = useMemo(
    () =>
      debounce((input: string) => {
        fetchSearchedMovie(input);
        setResultsOpen(true); // open dropdown when searching
      }, 500),
    [fetchSearchedMovie],
  );

  const titles = useMemo(
    () => getTitles(searchResults?.results || []),
    [searchResults],
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setInputValue(value);

    if (!value.trim()) {
      debouncedFetch.cancel();
      setSearchResults(null);
      setResultsOpen(false);
      return;
    }
    debouncedFetch(value);
  }

  // Outside click detection
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setResultsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="flex flex-row items-center justify-center gap-3"
      ref={wrapperRef}
    >
      <div className="relative">
        <input
          type="text"
          className="border border-border-main rounded-2xl outline-none px-4 py-2 w-60 
              focus:w-80 md:focus:w-120 lg:focus:w-140 
              transition-all duration-200 ease-in-out 
              focus:ring-2 focus:ring-border-secondary"
          placeholder="Search here..."
          spellCheck="false"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setResultsOpen(true)}
        />

        {resultsOpen && (loading || error || titles.length > 0) && (
          <div className="absolute bg-border-main w-full rounded-2xl px-3 py-2">
            {loading && (
              <p className="text-sm text-gray-400 p-2">Searching...</p>
            )}
            {!loading && error && (
              <p className="text-sm text-gray-400 p-2">
                Failed to fetch movies.
              </p>
            )}
            {!loading &&
              !error &&
              titles.length === 0 &&
              inputValue.trim().length > 0 && (
                <p className="text-sm text-gray-400 p-2">No results found.</p>
              )}
            {!loading && !error && titles.length > 0 && (
              <ul className="flex flex-col overflow-y-auto max-h-60">
                {titles.map((title) => (
                  <li
                    key={title.id}
                    className="border-b border-b-border-secondary rounded-md cursor-pointer p-2 flex flex-row justify-between w-full items-center gap-4 hover:bg-border-bottom"
                  >
                    <span className="font-semibold w-5/8 text-sm lg:text-md xl:text-lg">
                      {title.title}
                    </span>
                    <span className="text-gray-400 w-1.5/8 text-sm lg:text-md xl:text-lg">
                      {title.year.split("-").at(0)}
                    </span>
                    <span className="flex flex-row items-center w-1.5/8 gap-1 text-sm lg:text-md xl:text-lg">
                      {roundOffRating(Number(title.rating))}
                      <span className="text-lg -mt-1">
                        <FaStar className="text-yellow-400" />
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
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
