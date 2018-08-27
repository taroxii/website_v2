import React, {Component} from 'react'
// imaport path Components

import { Router, Route, Switch} from "react-router";
import {createBrowserHistory} from "history";
// 
var hist = createBrowserHistory();


export default class Child extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
   
    render(){
        return (
        <div>
        </div>
        
        )
    }
}