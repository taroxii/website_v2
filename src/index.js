import React from 'react';
import ReactDOM from 'react-dom';


//Style sheet

import '../scss/style.scss'
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('doc'));
registerServiceWorker();



