import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import GamePage from "./components/GamePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="container">
          <Switch>
            <Route exact path="/" component={WelcomePage} />
              <Route exact path="/game" component={GamePage} />
        </Switch>
        </main>
      </div>


    );
  }
}

export default App;
