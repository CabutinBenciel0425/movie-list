import SearchResultsList from "./SearchResultsList";

function Main() {
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
