import React, { Component } from 'react';
import {Switch, Route} from 'react-router'
import {Link} from 'react-router-dom'

import Welcome from "./welcome";

export default class Home extends Component {

    constructor(props){
        super(props);


        this.state = {
            title: 'Hello World',
            submenu: [
                {key: 'home',         name: 'หน้าหลัก',             link: '/'}
              , {key: 'packages',     name: 'ทัวร์มาใหม่',     link: '/packages/new', }
              , {key: 'packages',     name: 'ทัวร์ลดราคา',     link: '/packages/sale', }
              , {key: 'packages',     name: 'ทัวร์แนะนำ',     link: '/packages', }
              , {key: 'packages',     name: 'ทัวร์ยอดนิยม',     link: '/packages', }
              , {key: 'packages',     name: 'ทัวร์ตามเทศกาล',     link: '/packages', }
              , {key: 'packages',     name: 'ทัวร์ยอดนิยม',     link: '/packages', }
              , {key: 'packages',     name: 'ทัวร์วันหยุด',     link: '/packages', }
              , {key: 'packages',     name: 'ทัวร์ในประเทศ',     link: '/packages', }
                
            ]

          };
    }

    render() {
        const {match} = this.props

        return (
            
            <div>
                <nav id="pageSubmenu">
                    <div className="container"><ul className="row justify-content-md-center">
                    {this.state.submenu.map((value,index)=>{
                        return(
                        <li key={index} className="col-md-auto"><Link className="link" to={value.link}>{value.name}</Link></li>
                        )
                    })}
                    </ul></div>
                </nav>
                
                <Switch>

                    <Route exact path="/" name="welcome" component={Welcome} />

                </Switch>
            </div>
        )
    }
}