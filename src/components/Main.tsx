import { useAppContext } from "../hooks/useAppContext";
import SearchResultsList from "./SearchResultsList";

function Main() {
  const { favorites } = useAppContext();

  console.log(favorites);
  return (
    <main
      style={{ gridArea: "main" }}
      className="border border-r-0 border-border-main h-full overflow-y-auto"
    >
      <SearchResultsList />

      {/* <MovieInfo /> */}
    </main>
  );
}

export default Main;
