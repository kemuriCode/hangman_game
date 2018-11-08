import React from 'react';
import "./sass/main.scss";

const NotFound = () => (
  <div className="container">
    <div className="alert alert-dismissible alert-warning">
      <button type="button" className="close" data-dismiss="alert">&times;</button>
      <h4 className="alert-heading">NOT FOUND!</h4>
      <p className="mb-0">UPPS!</p>
      <a href="/" className="alert-link">Come ON! Go back and play! :)</a>
    </div>
  </div>
);

export default NotFound;