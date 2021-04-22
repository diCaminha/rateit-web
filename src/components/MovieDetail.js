import { Card, CardContent } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  star_full: {
    color: "orange",
  },
  star_empty: {
    color: "gray",
  },
});

const MovieDetail = (props) => {
  const classes = useStyles();
  return (
    <div>
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
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};

export default MovieDetail;
