import React from "react";
import { Link } from "react-router-dom";
import MovieDefaultImg from "../img/defaultMovieCover.png";

export default function Movie(props) {
  const {
    Title: title,
    Year: year,
    Poster: poster,
    imdbID: id,
    Type: type,
  } = props;

  

  return (
    <div className="card" title={`More Info about ${title}`}>
      <Link to={`/${id}`}>
        <div className="card-image">
          {poster === "N/A" ? (
            <>
              <img
                src={MovieDefaultImg}
                alt={title}
                style={{ objectFit: "fill" }}
              />
              <span className="card-title">{title}</span>
            </>
          ) : (
            <img src={poster} alt={title} />
          )}
        </div>
        <div className="card-content">
          <p className="movieCardTitle">
            <b>{title}</b>
          </p>
          <hr />
          <p>
            <b>Released: </b>
            {year}
          </p>
          <p>
            <b>Type:</b> {type}
          </p>
        </div>
      </Link>
    </div>
  );
}
