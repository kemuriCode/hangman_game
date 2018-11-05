import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => (
    <div className="container">
        <div className="jumbotron">
            <h1 className="display-3">MINIMALISTIC HANGMAN GAME</h1>
            <h1 className="display-5">created by Marcin Dymek</h1>
            <p className="lead">Very simple game :)</p>
            <Link to="/game" className="btn btn-primary btn-lg" herf="#" role="button">START</Link>
        </div>
    </div>
);

export default WelcomePage;

