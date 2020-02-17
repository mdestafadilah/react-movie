import React from "react";

import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

const Movie = ({ movieId }) => (
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

export default Movie;
