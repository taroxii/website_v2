
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
const data = require('../lib/data/footer');
const social = require('../lib/data/social');

const Footer = (props) => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col col-md-3">
                        <div className="footer-logo">
                            <img src={props.pageLogo} />
                        </div>
                        <div className="footer-social">

                            <span className="title">ติดตามเราได้ที่:</span>

                            {social.map((value, index) => {
                                return (
                                    <Link key={value.key} className={`link ${value.key}`} target="_blank" to={value.link}><span className="textreplacement">{value.name}</span></Link>
                                )
                            })}

                        </div>
                        <div className="footer-copyright">Copyright © 2011 - 2018 BKK Software. All Rights Reserved</div>
                    </div>
                    <div className="col col-md-3">

                        <h3>{data.nav && data.nav[0].title}</h3>
                        <ul className="footerNav">
                            {data.nav[0].items.map((value, index) => {
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
    )
}

export default Footer;