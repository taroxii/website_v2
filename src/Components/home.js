import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Slider from "./Pages/layouts/slider";

export default class Home extends Component {

    constructor(props){
        super(props);


        this.state = {
            title: 'Hello World',
            menu: [
                {key: 'home',         name: 'หน้าหลัก',             link: '/'}
              , {key: 'packages',     name: 'ทัวร์มาใหม่',     link: '/packages', }
              , {key: 'packages',     name: 'ทัวร์ราคาถูก',     link: '/packages', }
              , {key: 'packages',     name: 'ทั้วร์แนะนำ',     link: '/packages', }
              , {key: 'packages',     name: 'ประเทศ',     link: '/packages', }
              , {key: 'packages',     name: 'Top 10',     link: '/packages', }
              , {key: 'packages',     name: 'อัพเดท',     link: '/packages', }
                
            ]

          };
    }

    render() {
        return (
            
            <div>
                <nav  id="pageSubmenu">
                    <div className="container"><ul className="row justify-content-md-center">
                    {this.state.menu.map(value=>{
                        return(
                        <li key={value.name} className="row"><Link className="link" to={value.link}>{value.name}</Link></li>
                        )
                    })}
                    </ul></div>
                </nav>
                
                <div  className="container">
                    <h1>This Home</h1>

                    <Slider />
                </div>
            </div>
        )
    }
}