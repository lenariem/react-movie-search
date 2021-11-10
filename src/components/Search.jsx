import React, { Component } from "react";
import Filter from "./Filter";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Search extends Component {
  state = {
    searchTerm: "",
    type: "all",
  };

  getMovieBySearch = () => {
    let termUrl = localStorage.getItem("rememberSearch");
    if (!termUrl) {
      termUrl = "titanic";
    }

    this.props.getMovies(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${termUrl.trim()}${
        this.state.type !== "all" ? `&type=${this.state.type}` : ""
      }`
    );
  };

  setSearchTerm = (e) => {
    let term = e.target.value.toLowerCase();
    if (!term) {
      term = "matrix";
    }
    this.setState({ searchTerm: term });
    localStorage.setItem("rememberSearch", term);
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.getMovieBySearch();
    }
  };

  filterResults = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => this.getMovieBySearch()
    );
  };

  // to fill page by default
  componentDidMount() {
    this.getMovieBySearch();
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              className="validate"
              placeholder="Search by title"
              maxLength="100"
              value={this.state.searchTerm}
              onChange={(e) => this.setSearchTerm(e)}
              onKeyPress={this.handleKey}
              onClick={() => this.setState({ searchTerm: "" })}
            />

            <button
              className="btn search-btn teal darken-2"
              onClick={this.getMovieBySearch}
            >
              <i className="material-icons">search</i>
            </button>
          </div>
        </div>

        <Filter filterResults={this.filterResults} type={this.state.type} />
      </>
    );
  }
}
