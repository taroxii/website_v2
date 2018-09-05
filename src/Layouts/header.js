import React, { Component } from 'react';
import { Link } from 'react-router-dom'
const data = require('../lib/data/header');

//hoc component
const Header = (props) => {
    return (
        <header id="header" className="">
            <div className="container"><div className="row">
                <div className="col-md-auto"><h1 id="pageLogo" className="logo"><img src={pageLogo} /></h1></div>

                <nav className="col-md-auto" id="pageNav">
                    <ul className="row nav">
                        {data.map(e => {
                            return <li key={e.name} className="col"><Link className="link" to={e.link}>{e.name}</Link></li>
                        })}
                    </ul>
                </nav>
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
    )
}