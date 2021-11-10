import React from "react";
import Movie from "./Movie";
import notFoundImg from "../img/cat.jpg";

export default function MovieList({ movies = [] }) {
  return (
    <div className="moviesList">
      {movies.length ? (
        movies.map((movie) => (
          <Movie key={movie.imdbID + Math.random()} {...movie} />
        ))
      ) : (
        <div className="notFoundText">
          <div>Sorry, this movie is not found! Please try another title!</div>
          <div>
            <img className="notFoundImg" src={notFoundImg} alt="cat" />
          </div>
        </div>
      )}
    </div>
  );
}
