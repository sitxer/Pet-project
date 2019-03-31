import React, { Component } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import { Switch, withRouter } from "react-router";

import Box from "./containers/Box";
import CustomText from "./containers/CustomText";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route component={Box} path="/" exact />
          <Route component={CustomText} path="/custom-text" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
