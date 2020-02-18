import React from "react";

import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";
import { useMovieFetch } from "./hooks/useMovieFetch";

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useMovieFetch(movieId);
  return (
    <>
      <Navigation />
      <MovieInfo />
      <MovieInfoBar />
      <Grid>
        <Actor />
        <Spinner />
      </Grid>
    </>
  );
};

export default Movie;
