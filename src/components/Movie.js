import React, { Component } from "react";
import { API_URL, API_KEY } from "../config";
import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

// import { useMovieFetch } from "./hooks/useMovieFetch";

class Movie extends Component {
  state = { loading: true };

  fetchData = async () => {
    const { movieId } = this.props;
    this.setState({ loading: true, error: false });

    // setError(false);
    // setLoading(true);
    try {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      //   console.log(result);
      const creditEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditResult = await (await fetch(creditEndpoint)).json();
      //   console.log(creditResult);
      const directors = creditResult.crew.filter(
        member => member.job === "Director"
      );

      // populate data
      this.setState(
        {
          ...result,
          actors: creditResult.cast,
          directors,
          loading: false
        },
        () => {
          localStorage.setItem(movieId, JSON.stringify(this.state));
        }
      );
    } catch (error) {
      this.setState({ error: true });
    }
  };

  componentDidMound() {
    const { movieId } = this.props;
    if (localStorage[movieId]) {
      console.log("Grab localstorage");
      this.setState(JSON.parse(localStorage[movieId]));
    } else {
      console.log("Grab localstorage");
      this.fetchData();
    }
  }

  render() {
    const {
      original_title: originalTitle,
      runtime,
      budget,
      revenue,
      actors,
      error,
      loading
    } = this.state;

    if (error) return <div>Error data ..</div>;
    if (loading) return <Spinner />;

    return (
      <>
        <Navigation movie={originalTitle} />
        <MovieInfo movie={this.state} />
        <MovieInfoBar time={runtime} budget={budget} revenue={revenue} />
        <Grid header="Actors">
          {actors.map(actor => (
            <Actor key={actor.credit_id} actor={actor} />
          ))}
        </Grid>
      </>
    );
  }
}

export default Movie;
