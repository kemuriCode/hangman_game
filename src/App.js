import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import WelcomePage from './components/welcomePage';
import GamePage from './components/GamePage';
import NotFound from './components/notFound';

class App extends Component {
  render() {
    return (
      <div className="container">
        <main className="main">
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/game" component={GamePage} />
            <Route exact path="/*" component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
