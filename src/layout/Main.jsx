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
    /* const res = await fetch(url);
    if (!res.ok) {
      this.setState({
        loading: false,
      });
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
     
    }

    const data = await res.json();
 */
    
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
