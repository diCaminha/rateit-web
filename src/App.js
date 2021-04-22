import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import MovieList from "./components/movie-list";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieSelected, setMovieSelected] = useState(null);

  useEffect(() => {
    async function getMovies() {
      const result = await axios("http://localhost:8000/api/movies");
      console.log(result.data);
      setMovies(result.data);
    }
    getMovies();
  }, []);

  const onMovieClicked = async (movie) => {
    const result = await axios.get(`http://localhost:8000/api/movies/${movie.id}`);
    setMovieSelected(result.data);
  };

  return (
    <Layout>
      <MovieList movies={movies} movieClicked={onMovieClicked} />
      {movieSelected ? (
        <MovieDetail movie={movieSelected} />
      ) : (
        <h2>Selecione um filme</h2>
      )}
    </Layout>
  );
};

export default App;
