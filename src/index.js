import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";

//Style sheet

import '../scss/style.scss'
import App from './App';
import registerServiceWorker from './registerServiceWorker';



// ReactDOM.render(<App />,
//      document.getElementById('doc'));

ReactDOM.render(
(  <Router>
    <App/> 
    </Router>),
    document.getElementById('doc')
)
registerServiceWorker();

