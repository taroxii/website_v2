import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";



import Home from "./Views/Pages/home";
//import Tour from "./Components/tour";
import Packages from "./Components/packages";

// set config Page 
import pageLogo from "../public/dist/images/tourdd.f313fe7f.jpg";

import { createBrowserHistory } from "history";
// 
import _Alert  from './Components/Utils/alert';

import Toolbar from './Layouts/toolbar';
import Header from './Layouts/header';
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
        <div className="layout">
          {/* site Alert */}
          {this.state.alert && <_Alert/>}
          <Toolbar/>
          {/* header */}
          <Header pageLogo={pageLogo} />
          
          {/* main */}
          <main id="main">
            <Switch>
              <Route exact path="/" name="home" component={Home} />
              <Route path="/packages" name="packages" component={Packages} />
            </Switch>
          </main>
      
        </div>
    )
  }
}

export default App;
