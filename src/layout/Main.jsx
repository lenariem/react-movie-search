import React, { Component } from "react";
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

export default class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  getMovies = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => 
        this.setState({ movies: data.Search, loading: false,})
      )
      .catch(err => {
        console.log(err);
        this.setState({loading: false})
      })
    
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
