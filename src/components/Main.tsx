import { useAppContext } from "../hooks/useAppContext";
import MovieInfo from "./MovieInfo";
import SearchResultsList from "./SearchResultsList";

function Main() {
  const { view } = useAppContext();
  return (
    <main
      style={{ gridArea: "main" }}
      className="border border-r-0 border-border-main h-full overflow-y-auto"
    >
      {view === "search" && <SearchResultsList />}
      {view === "movie" && <MovieInfo />}
    </main>
  );
}

export default Main;
