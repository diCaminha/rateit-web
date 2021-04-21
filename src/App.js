import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import MovieList from "./components/movie-list";

const App = () => {
  const [movies, setMovies] = useState([]);

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
      <MovieList movies={movies}/>
    </Layout>
  );
};

export default App;
