import { Card, CardContent } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import axios from "axios";

const useStyles = makeStyles({
  star_full: {
    color: "orange",
  },
  star_empty: {
    color: "gray",
  },

  rate_container: {
    borderTop: "20px solid purple",
    marginTop: "20px",
  },
});

const MovieDetail = (props) => {
  const [highlighted, setHighlighted] = useState(-1);
  const classes = useStyles();

  const highlighteStar = (high) => (evt) => {
    setHighlighted(high);
  };

  const rateMovie = (rate) => async (evt) => {
    let config = {
      headers: {
        Authorization: "Token 70dc3c3021ddd457bd83ea3654ea5936fbd1624a",
      },
    };

    const result = await axios.post(
      `http://localhost:8000/api/movies/${props.movie.id}/rate_movie/`,
      { stars: rate + 1 },
      config
    );
    
    props.updateSelectedMovie(props.movie);
    
  };

  return (
    <React.Fragment>
      {props.movie ? (
        <Card>
          <CardContent>
            <h2>{props.movie?.title}</h2>
            <p>{props.movie?.description}</p>
            <FontAwesomeIcon
              icon={faStar}
              className={
                props.movie.avg_ratings > 0
                  ? classes.star_full
                  : classes.star_empty
              }
            />
            <FontAwesomeIcon
              icon={faStar}
              className={
                props.movie.avg_ratings > 1
                  ? classes.star_full
                  : classes.star_empty
              }
            />
            <FontAwesomeIcon
              icon={faStar}
              className={
                props.movie.avg_ratings > 2
                  ? classes.star_full
                  : classes.star_empty
              }
            />
            <FontAwesomeIcon
              icon={faStar}
              className={
                props.movie.avg_ratings > 3
                  ? classes.star_full
                  : classes.star_empty
              }
            />
            <FontAwesomeIcon
              icon={faStar}
              className={
                props.movie.avg_ratings > 4
                  ? classes.star_full
                  : classes.star_empty
              }
            />
            ({props.movie ? props.movie.qnt_ratings : 0})
            <div className={classes.rate_container}>
              <h2>Rate it</h2>
              {[...Array(5)].map((e, i) => {
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={
                      highlighted > i - 1
                        ? classes.star_full
                        : classes.star_empty
                    }
                    onMouseEnter={highlighteStar(i)}
                    onClick={rateMovie(i)}
                    onMouseLeave={highlighteStar(-1)}
                  />
                );
              })}
            </div>
          </CardContent>
        </Card>
      ) : null}
    </React.Fragment>
  );
};

export default MovieDetail;
