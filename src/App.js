import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import MovieList from "./components/movie-list";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieSelected, setMovieSelected] = useState(null);


  const onMovieClicked = (movie) => {
    console.log(movie);
    setMovieSelected(movie);
  }

  useEffect(() => {
    async function getMovies() {
      const result = await axios("http://localhost:8000/api/movies");
      console.log(result.data);
      setMovies(result.data);
    }
    getMovies();
  }, []);

  return (
    <Layout>
      <MovieList movies={movies} movieClicked={onMovieClicked}/>
    </Layout>
  );
};

export default App;
