import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import GamePage from "./components/GamePage";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="hangman">
        <main className="container">
          <Switch>
            <Route exact path="/" component={WelcomePage} />
              <Route exact path="/game" component={GamePage} />
              <Route exact path="/*" component={NotFound}/>
        </Switch>
        </main>
      </div>


    );
  }
}

export default App;
