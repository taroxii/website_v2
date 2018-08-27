import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Slider from "../layouts/slider";

export default class Welcome extends Component {

    constructor(props){
        super(props);


        this.state = {
            title: 'Hello World',
          };
    }

    render() {
        const {match} = this.props
        
        return (
            
            <div>
                <Slider />

                <div  className="container">
                    
                    <div class="row two-columns home-main clearfix">

                        <div class="col primary-content">

                            <div class="module">
                                <div class="page-title">
                                    <h1>ทัวร์แนะนำ</h1>
                                </div>

                                <div id="gr"></div>
                            </div>


                            <div class="module">
                                <div class="page-title">
                                    <h1>ทัวร์มาใหม่</h1>
                                </div>
                            </div>

                            <div class="module">
                                <div class="page-title">
                                    <h1>ทัวร์ลดราคา</h1>
                                </div>
                            </div>

                            <div class="module">
                                <div class="page-title">
                                    <h1>บทความท่องเที่ยว</h1>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-auto secondary-content">

                            <div class="module">
                                <div class="page-title">
                                    <h1>ทัวร์ต่างประเทศ</h1>
                                </div>
                            </div>
                        
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }
}