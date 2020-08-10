import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import ShopHeader from "../shop-header";

import "./app.css";

export default class App extends Component {
  render() {
    return (
      <main role="main" className="container">
        <ShopHeader numItems={5} total={210} />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </main>
    );
  }
}
