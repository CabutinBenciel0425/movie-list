import { useGetMovie } from "../hooks/useGetMovie";

function MovieInfo() {
  console.log(useGetMovie(27205));
  return <div>This is the movie info</div>;
}

export default MovieInfo;
