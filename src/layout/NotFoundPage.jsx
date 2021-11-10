import React from "react";
import BackBtn from "../components/BackBtn";
import CatNotFound from "../img/cat.jpg";

export default function NotFoundPage({ error = "Not correct URL" }) {
  return (
    <div className="notFoundPage">
      <h1>Page not found</h1>
      <h5 style={{ color: "#b71c1c" }}>{error}</h5>
      <img className="notFoundImg" src={CatNotFound} alt="cat in cinema" />
      <br />
      <br />
      <BackBtn />
    </div>
  );
}
