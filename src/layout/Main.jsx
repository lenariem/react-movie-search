import React, { Component } from "react";
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

export default class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  getMovies = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    const data = await res.json();

    this.setState({
      movies: data.Search,
      loading: false,
    });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <Search getMovies={this.getMovies} movies={movies} />

        {!loading ? (
          <MovieList movies={movies} />
        ) : (
          <>
            <p>Loading ...</p>
            <Preloader />
          </>
        )}
      </main>
    );
  }
}
