import React, { Component } from 'react';

export default class Header extends Component{

    render (){
        return
    <div>

        // banner
      <div key="0" id="banner">
        {this.state.name}
        <input type="text" onChange={this.handleChange} />
        </div>
    
        // topbar
        <header className="MainHeader clearfix">
        <div id="header" className="container">
            <h1 className="MainLogo"></h1>
            <nav className="MainNav">{this.state.menu.map(val=>{return <a href={val.link} key={val.key}>{val.name}</a>})}</nav>
        </div>
        </header>

    </div>
    
    } 
}