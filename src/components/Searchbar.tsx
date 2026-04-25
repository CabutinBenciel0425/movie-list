import debounce from "lodash/debounce";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import { useSearchMovie } from "../hooks/useSearchMovie";
import { useAppContext } from "../hooks/useAppContext";
import { getTitles, roundOffRating } from "../helpers/utils";

function Searchbar() {
  const [inputValue, setInputValue] = useState<string>("");
  const [resultsOpen, setResultsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const { setSearchResults, searchResults, setView, setSelectedMovie } =
    useAppContext();
  const { fetchSearchedMovie, loading, error } =
    useSearchMovie(setSearchResults);

  const debouncedFetch = useMemo(
    () =>
      debounce((input: string) => {
        fetchSearchedMovie(input);
        setResultsOpen(true);
        setHighlightedIndex(-1);
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
    setHighlightedIndex(-1);

    if (!value.trim()) {
      debouncedFetch.cancel();
      setSearchResults(null);
      setResultsOpen(false);
      return;
    }
    debouncedFetch(value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) => (prev < titles.length - 1 ? prev + 1 : 0));
    }

    if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : titles.length - 1));
    }

    if (e.key === "Enter") {
      if (highlightedIndex === -1) {
        setResultsOpen(false);
        setHighlightedIndex(-1);
        setView("search");
      } else if (highlightedIndex >= 0) {
        selectedMovieActions(highlightedIndex);
      }
    }

    if (e.key === "Escape") {
      setHighlightedIndex(-1);
      setResultsOpen(false);
    }
  }

  function selectedMovieActions(index: number) {
    setHighlightedIndex(index);
    setInputValue(titles[index].title);
    setResultsOpen(false);
    setHighlightedIndex(-1);
    setView("movie");
    setSelectedMovie(titles[highlightedIndex].id);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setResultsOpen(false);
        setHighlightedIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (highlightedIndex >= 0) {
      const el = itemRefs.current[highlightedIndex];
      el?.scrollIntoView({
        behavior: "auto",
        block: "nearest",
      });
    }
  }, [highlightedIndex]);

  useEffect(() => {
    itemRefs.current = [] as (HTMLLIElement | null)[];
  }, [titles]);

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
          value={
            highlightedIndex === -1
              ? inputValue
              : titles[highlightedIndex].title
          }
          onChange={handleInputChange}
          onFocus={() => setResultsOpen(true)}
          onKeyDown={(e) => handleKeyDown(e)}
        />

        {resultsOpen && inputValue.trim().length > 0 && (
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
                {titles.map((title, index) => (
                  <li
                    key={title.id}
                    className={`border-b border-b-border-secondary rounded-md cursor-pointer p-2 flex flex-row justify-between w-full items-center gap-4 hover:bg-border-bottom active:bg-border-bottom ${highlightedIndex === index ? "bg-border-bottom" : ""}`}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    onMouseDown={() => selectedMovieActions(index)}
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
