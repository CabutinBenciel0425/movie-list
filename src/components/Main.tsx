import MovieInfo from "./MovieInfo";

function Main() {
  return (
    <main
      style={{ gridArea: "main" }}
      className="border border-r-0 border-border-main h-full py-2 px-4"
    >
      <MovieInfo />
    </main>
  );
}

export default Main;
