import React, { Component } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import { Switch } from "react-router";

import Box from "./containers/Box";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route component={Box} path="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
