import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bulma/css/bulma.css'
// import './app.css';


import App from './App';
import registerServiceWorker from './registerServiceWorker';


import Header from "./Layouts/header";

ReactDOM.render(<App />, document.getElementById('doc'));
registerServiceWorker();



