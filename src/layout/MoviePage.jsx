import React, { Component } from "react";
import NotFoundPage from "./NotFoundPage";
import BackBtn from "../components/BackBtn";
import MovieDefaultImg from "../img/defaultMovieCover.png";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class MoviePage extends Component {
  state = {
    movie: {},
  };

  getMovies = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const data = await res.json();

    this.setState({
      movie: data,
    });
  };

  componentDidMount() {
    const movieId = window.location.pathname.slice(1);
    this.getMovies(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`);
  }

  render() {
    const {
      Title: title = "No Info",
      Released: released = "No Info",
      Runtime: runtime = "No Info",
      Director: director = "No Info",
      Actors: actors = "No Info",
      Poster: poster,
      imdbRating: rating = "No Info",
      imdbVotes: votes = "No Info",
      Genre: genre = "No Info",
      Type: type = "No Info",
      BoxOffice: boxOffice = "No Info",
      Plot: plot = "",
      Response: response,
      Error: error,
    } = this.state.movie;

    return (
      <>
        {response === "False" ? (
          <NotFoundPage error={error} />
        ) : (
          <div className="moviePageContainer">
            <div className="cardMovie" title={title}>
              <div className="row">
                <div className="col s12 m6">
                  <div className="card big">
                    <div className="card-image">
                      {poster === "N/A" ? (
                        <>
                          <img
                            src={MovieDefaultImg}
                            alt={title}
                            style={{ objectFit: "cover" }}
                          />
                          <span className="card-title">{title}</span>
                        </>
                      ) : (
                        <img
                          src={poster}
                          alt={title}
                          style={{ objectFit: "contain", marginTop: "1%" }}
                        />
                      )}
                    </div>
                    <div className="card-content">
                      <p style={{ fontStyle: "italic", textAlign: "center" }}>
                        {plot === "N/A" ? "" : plot}
                      </p>
                      <hr />
                      <p>
                        <b>Released: </b>
                        {released}
                      </p>
                      <p>
                        <b>Runtime: </b>
                        {runtime}
                      </p>
                      <p>
                        <b>Director: </b>
                        {director}
                      </p>
                      <p>
                        <b>Actors: </b>
                        {actors}
                      </p>
                      <p>
                        <b>Genre:</b> {genre}
                      </p>
                      <p>
                        <b>imdbRating:</b> {rating} by {votes} votes
                      </p>
                      <p>
                        <b>Box office:</b> {boxOffice}
                      </p>
                      <p>
                        <b>Type:</b> {type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BackBtn />
          </div>
        )}
      </>
    );
  }
}
