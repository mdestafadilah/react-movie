import React from "react";
import NoImage from "../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import MovieThumb from "./MovieThumb";
import { StyledMovieInfo } from "../styles/StyledMovieInfo";
import Movie from "../Movie";

const MovieInfo = ({ movie }) => (
  <div>
    <StyledMovieInfo backdrop={movie.backdrop_path}>
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <MovieThumb
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
          />
        </div>
      </div>
    </StyledMovieInfo>
  </div>
);

export default MovieInfo;
