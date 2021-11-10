import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import MoviePage from "./layout/MoviePage";
import NotFoundPage from "./layout/NotFoundPage";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/react-movie-search/" element={<Main />} />
          <Route path = '/:id' element={<MoviePage />}/>
          <Route path='*' exact={true} element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
