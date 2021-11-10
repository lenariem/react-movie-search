import React from "react";

export default function Filter({ filterResults, type }) {
  return (
    <div className="searchRadio">
      <p>
        <label>
          <input
            className="with-gap"
            name="group3"
            type="radio"
            data-type="all"
            onChange={(e) => filterResults(e)}
            checked={type === "all"}
          />
          <span>All</span>
        </label>
      </p>
      <p>
        <label>
          <input
            className="with-gap"
            name="group3"
            type="radio"
            data-type="movie"
            onChange={(e) => filterResults(e)}
            checked={type === "movie"}
          />
          <span>Movies</span>
        </label>
      </p>
      <p>
        <label>
          <input
            className="with-gap"
            name="group3"
            type="radio"
            data-type="series"
            onChange={(e) => filterResults(e)}
            checked={type === "series"}
          />
          <span>Series</span>
        </label>
      </p>
    </div>
  );
}
