import React, { Component } from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";


import Home from "./Pages/home";
//import Tour from "./Components/tour";
import Packages from "./Components/packages";

// set config Page 
import pageLogo from "./dist/images/tourdd.f313fe7f.jpg";

import { createBrowserHistory } from "history";
// 
var hist = createBrowserHistory();


class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      site: {
        name: 'TourDD',
        copyright: 'Copyright © 2011 - 2018 BKK Software. All Rights Reserved',
      },
<<<<<<< HEAD
      alert: '',

      title: 'Hello World',
=======
>>>>>>> 359d131d511f4ac0d18bb7c1967a3055de9524e3
      menu: [
        { key: 'home', name: 'หน้าแรก', link: '/' }
        , { key: 'packages', name: 'แพ็คเกจทัวร์', link: '/packages', }
        // , {key: 'recommend',    name: 'ทัวร์แนะนำ',         link: '/recommend'}
        , { key: 'private-tour', name: 'จัดกรุ๊ปทัวร์ส่วนตัว', link: '/private-tour', }
        , { key: 'about-us', name: 'เกี่ยวกับเรา', link: '/about-us', }
        , { key: 'blog', name: 'บทความท่องเที่ยว', link: '/blog', }
      ],

      social: [
        { key: 'facebook', name: 'Facebook', link: '/' }
        , { key: 'line', name: 'Line', link: '/' }
        , { key: 'Twitter', name: 'Twitter', link: '/' }
        , { key: 'Instagram', name: 'Instagram', link: '/' }
      ]

      , footer: {
        nav: [
          {
            title: 'Support',
            items: [
              { id: '', name: 'คำถามที่พบบ่อย', link: '/faq' }
              , { id: '', name: 'ติดต่อเรา', link: '/' }
              , { id: '', name: 'แนะนำ ติ-ชม', link: '/' }
              , { id: '', name: 'ดาวน์โหลด', link: '/' }
            ]
          }
        ]
      }

    };
  }

  handleChange = (evt) => {
    this.setState({
      name: evt.target.value
    })
  }

  render() {

    return (
      <Router>

        {/* layout */}
        <div className="layout">

          {/* site Alert */}
<<<<<<< HEAD
          <div id="pageAlert"><div className="container"><div className="msgblock">คุกกี้คือไฟล์ที่สร้างขึ้นโดยเว็บไซต์ที่คุณเคยเข้าชม เพื่ออำนวยความสะดวกในการใช้งาน หากคุณไม่เปลี่ยนการตั้งค่าคุกกี้ (setting) เว็บไซต์จะบันทึกว่าคุณอนุญาตให้เราเก็บข้อมูลการใช้งานบน</div><div className="linkBlock"><a href="/ms/en_TH/privacy_policy/privacy_policy.html">Privacy policy</a><span className="pipeSeparator"> | </span><a href="/ms/en_TH/privacy_policy/cookie_policy.html">Read more about cookies</a></div></div></div>
=======
          <div id="pageAlert">
            <div className="container">
              <div className="msgblock">We use cookies to make sure you get the best experience on our website. If you continue without changing your settings, you're agreeing to receive all cookies on the {this.state.site.name} website.</div>
              <div className="linkBlock">
                <a href="/ms/en_TH/privacy_policy/privacy_policy.html">Privacy policy</a>
                <span className="pipeSeparator"> | </span>
                <a href="/ms/en_TH/privacy_policy/cookie_policy.html">Read more about cookies</a>
              </div>

            </div>
          </div>
>>>>>>> 359d131d511f4ac0d18bb7c1967a3055de9524e3

          <div id="site-toolbar">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div id="help"><div className="title">Help</div></div>
                </div>

                <div className="col-md-auto">

                  <div className="row">
                    <div id="help" className="col-md-auto">
                      <div className="title">Sign in / Register</div>
                    </div>

                    <div id="help" className="col-md-auto">
                      <div className="title">Wish list: 2 items</div>
                    </div>

                    <div id="help" className="col-md-auto">
                      <div className="title">Cart: 3 items</div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>

          {/* header */}
          <header id="header" className="">
            <div className="container"><div className="row">
              <div className="col-md-auto"><h1 id="pageLogo" className="logo"><img src={pageLogo} /></h1></div>

              <nav className="col-md-auto" id="pageNav"><ul className="row nav">
                {this.state.menu.map(value => {
                  return (
                    <li key={value.name} className="col"><Link className="link" to={value.link}>{value.name}</Link></li>
                  )
                })}
              </ul></nav>

              <div id="pageSearch" className="col">
                <form>
                  <div className="input-field">
                    <input type="text" id="search-input" autoComplete="off" />
                    <label htmlFor="search-input">ค้นหาทัวร์</label>
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
              <Route path="/packages" name="packages" component={Packages} />
            </Switch>
          </main>
          {/* end: main */}

          {/* footer */}
          <footer id="footer">
            <div className="container">
              <div className="row">
                <div className="col col-md-3">
                  <div className="footer-logo">
                    <img src={pageLogo} />
                  </div>
                  <div className="footer-social">

                    <span className="title">ติดตามเราได้ที่:</span>

                    {this.state.social.map((value, index) => {
                      return (
                        <Link key={value.key} className={`link ${value.key}`} target="_blank" to={value.link}><span className="textreplacement">{value.name}</span></Link>
                      )
                    })}

                  </div>
                  <div className="footer-copyright">Copyright © 2011 - 2018 BKK Software. All Rights Reserved</div>
                </div>
                <div className="col col-md-3">

                  <h3>{this.state.footer.nav && this.state.footer.nav[0].title}</h3>
                  <ul className="footerNav">
                    {this.state.footer.nav[0].items.map((value, index) => {
                      return (
                        <li key={index} className=""><Link to={value.link}>{value.name}</Link></li>
                      )
                    })}

                  </ul>
                </div>
                <div className="col col-md-3"></div>
                <div className="col col-md-3"></div>
              </div>
            </div>
          </footer>
          {/* end: footer */}
        </div>
        {/* end: letou */}
      </Router>
    )
  }
}

export default App;
