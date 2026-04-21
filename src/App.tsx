import Favorites from "./components/Favorites";
import Header from "./components/Header";
import MovieInfo from "./components/MovieInfo";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <MovieInfo />
      <Favorites />
    </div>
  );
}

export default App;
