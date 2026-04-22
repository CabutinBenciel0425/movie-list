import MovieInfo from "./MovieInfo";
import SearchResultsList from "./SearchResultsList";

function Main() {
  return (
    <main
      style={{ gridArea: "main" }}
      className="border border-r-0 border-border-main h-full py-2 px-4 overflow-y-auto md:px-8 md:py-6 lg:px-10 lg:py-8 lg:text-2xl"
    >
      {/* <SearchResultsList /> */}

      <MovieInfo />
    </main>
  );
}

export default Main;
