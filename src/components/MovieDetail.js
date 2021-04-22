import { Card, CardContent } from "@material-ui/core";

const MovieDetail = (props) => {
  return (
    <div>
      {props.movie ? (
        <Card>
          <CardContent>
            <h2>{props.movie?.title}</h2>
            <p>{props.movie?.description}</p>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};

export default MovieDetail;
