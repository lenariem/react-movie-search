import React from "react";
import { Link } from "react-router-dom";

export default function BackBtn() {
  return (
    <div className="backBtn">
      <Link className="btn" to="/react-movie-search/">
        <i className="material-icons rightMargin">arrow_back</i>Go back to main
        page
      </Link>
    </div>
  );
}
