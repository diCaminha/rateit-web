import { List, ListItem, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const MovieList = (props) => {
  
  const movieClicked = (movie) => (event) => {
    props.movieClicked(movie);
  };

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <List>
        {props.movies &&
          props.movies.map((movie) => {
            return (
              <div key={movie.id}>
                <h2 onClick={movieClicked(movie)}>{movie.title}</h2>
              </div>
            );
          })}
      </List>
    </div>
  );
};

export default MovieList;
