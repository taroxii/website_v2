import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Views/Pages/home";
//import Tour from "./Components/tour";
import Packages from "./Components/packages";

import { createBrowserHistory } from "history";

var hist = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      alert:true
    }
  }

  handleChange = (evt) => {
    this.setState({
      name: evt.target.value
    })
  }

  render() {

    return (
      
      <main id="main">
        <Switch>
          <Route exact path="/" name="home" component={Home} />
          <Route path="/packages" name="packages" component={Packages} />
        </Switch>
      </main>
    )
  }
}

export default App;
