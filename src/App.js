import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";


import Child from './Child'
import Home from "./Pages/home";
//import Tour from "./Components/tour";
import Packages from "./Components/packages";

// set config Page 
import pageLogo from "./dist/images/tourdd.f313fe7f.jpg";

import {createBrowserHistory} from "history";
// 
var hist = createBrowserHistory();


class App extends Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: 'Hello World',
      menu: [
          {key: 'home',         name: 'หน้าแรก',             link: '/'}
        , {key: 'packages',     name: 'แพ็คเกจทัวร์',     link: '/packages', }
        // , {key: 'recommend',    name: 'ทัวร์แนะนำ',         link: '/recommend'}
        , {key: 'private-tour', name: 'จัดกรุ๊ปทัวร์ส่วนตัว',     link: '/private-tour',}
        , {key: 'about-us',     name: 'เกี่ยวกับเรา',     link: '/about-us',}
        , {key: 'blog',         name: 'บทความท่องเที่ยว',     link: '/blog',}
      ]
    };
  }
 
  handleChange = (evt)=>{
    this.setState ({
      name: evt.target.value
    })
  }

  render() {
    // console.log( this.props.constructor );
    return (
      <Router>

        {/* layout */}
        <div className="layout">

          {/* site Alert */}
          <div id="pageAlert">
            <div className="container">
              {this.state.title}
              <input type="text" onChange={this.handleChange} />
            </div>
          </div>

          {/* header */}
          <header id="header" className="">
            <div className="container"><div className="row">
                  <div class="col-md-auto"><h1 id="pageLogo" className="logo"><img src={pageLogo} /></h1></div>

                  <nav className="col-md-auto" id="pageNav"><ul className="row nav">
                  {this.state.menu.map(value=>{
                    return(
                      <li key={value.name} className="col"><Link className="link" to={value.link}>{value.name}</Link></li>
                    )
                  })}
                  </ul></nav>

                  <div id="pageSearch" className="col">
                    <form>
                      <div class="input-field">
                        <input type="text" id="search-input" autocomplete="off" />
                        <label for="search-input">ค้นหาทัวร์</label>
                      </div>
                     
                    </form>
                  </div>
            </div></div>
          </header>
          {/* end: header */}

          {/* main */}  
          <main id="main">
            <Switch>
                <Route exact path="/" name="home" component={Home} />
                <Route  path="/packages" name="packages" component={Packages} />
              </Switch>
          </main>
          {/* end: main */}

          {/* footer */}
          <footer id="footer">
            <div className="container">footer</div>
          </footer>
          {/* end: footer */}
        </div>
        {/* end: letou */}
      </Router>
    )
  }
}

export default App;
