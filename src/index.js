import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";

//Style sheet

import '../scss/style.scss'

import App from './App';
import Login from './Passport/Pages/login';
import Register from './Passport/Pages/register';
import Error404 from './Views/Pages/404';

import registerServiceWorker from './registerServiceWorker';

// set config Page 
import pageLogo from "../public/dist/images/tourdd.f313fe7f.jpg";

// 
import _Alert  from './Components/Utils/alert';

// Layouts
import Toolbar from './Layouts/toolbar';
import Header from './Layouts/header';
import Footer from './Layouts/footer';

ReactDOM.render(
(  <Router>

        <Switch>
            <Route path="/login" name="login" component={Login} />
            <Route path="/register" name="register" component={Register} />


            {/* layout */}
            <div className="layout">
            
                {/* site Alert */}
                {<_Alert/>}

                <Toolbar/>

                {/* header */}
                <Header pageLogo={pageLogo} />


                   
            
                
                <Switch>
                <Route exact path="/" name="app" component={App} />
                <Route name="error404" component={Error404} />
                </Switch>
                
                <Footer pageLogo={pageLogo} />

                 
            </div>
            {/* end: layout */}

       
       </Switch>
    </Router>),
    document.getElementById('doc')
)
registerServiceWorker();

