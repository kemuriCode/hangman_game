import React from 'react';

const NotFound = () => (
    <div className="jumbotron">
        <div className="alert alert-dismissible alert-warning">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <h4 className="alert-heading">NOT FOUND!</h4>
            <p className="mb-0">UPPS!<a href="/" className="alert-link">Come ON! Go back and play! :)</a>.</p>
        </div>
    </div>
);

export default NotFound;

