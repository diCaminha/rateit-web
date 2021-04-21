import React from "react";

const MovieList = (props) => {
  return (
    <div>
      {props.movies && props.movies.map((movie) => <h1>{movie.title}</h1>)}
    </div>
  );
};

export default MovieList;
