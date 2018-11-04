import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="jumbotron">
        <div className="alert alert-dismissible alert-warning">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <h4 className="alert-heading">Warning!</h4>
            <p className="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra
                augue. Praesent commodo cursus magna, <a href="/" className="alert-link">Come ON! Go back and play! :)</a>.</p>
        </div>
    </div>
);

export default NotFound;

