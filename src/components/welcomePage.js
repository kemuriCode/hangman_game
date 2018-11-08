import React from 'react';
import { Link } from 'react-router-dom';
import "../sass/main.scss";

const WelcomePage = () => (
  <div className="container">
    <div className="jumbotron text-white">
      <h1 className="display-3">MINIMALISTIC HANGMAN GAME</h1>
      <h2 className="display-6">created by Marcin Dymek</h2>
      <p>very simple game</p>
      <Link to="/game" className="btn btn-primary btn-lg" herf="start" role="button">START</Link>
    </div>
  </div>
);

export default WelcomePage;