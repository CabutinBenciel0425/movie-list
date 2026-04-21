import MovieInfo from "./MovieInfo";

function Main() {
  return (
    <main
      style={{ gridArea: "main" }}
      className="border border-r-0 border-border-main h-full"
    >
      <MovieInfo />
    </main>
  );
}

export default Main;
