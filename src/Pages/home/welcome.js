import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Slider from "../layouts/slider";

export default class Welcome extends Component {

    constructor(props){
        super(props);


        this.state = {
            title: '',

            items: [
                { link: '', caption: '', image_url: '//s.isanook.com/jo/0/rp/rc/w128h128/ya0xac0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvMy83L2RkZmIyMjAwYWIzM2E3MjJlZjFlMDA2NmVjODc1ZTM3LmpwZw==.jpg' }
                , { link: '', caption: '', image_url: '//s.isanook.com/jo/0/rp/rc/w128h128/ya0xac0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvZS8xLzRiOWY4OWY0ODA0Zjc5OTVlNjcxNmRlNzgwNmU2MGUxLmpwZw==.jpg' }

                , { link: '', caption: '', image_url: '//s.isanook.com/jo/0/rp/rc/w128h128/ya0xac0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvZS8xLzRiOWY4OWY0ODA0Zjc5OTVlNjcxNmRlNzgwNmU2MGUxLmpwZw==.jpg' }

                , { link: '', caption: '', image_url: '//s.isanook.com/jo/0/rp/rc/w128h128/ya0xac0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvZS8xLzRiOWY4OWY0ODA0Zjc5OTVlNjcxNmRlNzgwNmU2MGUxLmpwZw==.jpg' }

                , { link: '', caption: '', image_url: '//s.isanook.com/jo/0/rp/rc/w128h128/ya0xac0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvZS8xLzRiOWY4OWY0ODA0Zjc5OTVlNjcxNmRlNzgwNmU2MGUxLmpwZw==.jpg' }

                , { link: '', caption: '', image_url: '//s.isanook.com/jo/0/rp/rc/w128h128/ya0xac0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvZS8xLzRiOWY4OWY0ODA0Zjc5OTVlNjcxNmRlNzgwNmU2MGUxLmpwZw==.jpg' }

                , { link: '', caption: '', image_url: '//s.isanook.com/jo/0/rp/rc/w128h128/ya0xac0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvZS8xLzRiOWY4OWY0ODA0Zjc5OTVlNjcxNmRlNzgwNmU2MGUxLmpwZw==.jpg' }

                , { link: '', caption: '', image_url: '//s.isanook.com/jo/0/rp/rc/w128h128/ya0xac0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvZS8xLzRiOWY4OWY0ODA0Zjc5OTVlNjcxNmRlNzgwNmU2MGUxLmpwZw==.jpg' }

                , { link: '', caption: '', image_url: '//s.isanook.com/jo/0/rp/rc/w128h128/ya0xac0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvZS8xLzRiOWY4OWY0ODA0Zjc5OTVlNjcxNmRlNzgwNmU2MGUxLmpwZw==.jpg' }

                , { link: '', caption: '', image_url: '//s.isanook.com/jo/0/rp/rc/w128h128/ya0xac0m1w0/aHR0cDovL2ltZ2NhY2hlLmpvb3guY29tL211c2ljL2pvb3gvcGhvdG9fdGhfdGgvdG9wbGlzdF8zMDAvZS8xLzRiOWY4OWY0ODA0Zjc5OTVlNjcxNmRlNzgwNmU2MGUxLmpwZw==.jpg' }
            ]
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

                                <div className="ui-list columns-5">
                                {this.state.items.map(value=>{
                                    return(
                                        <div className="item"><div className="inner">
                                            <Link className="postImage" to={value.link}><img src={value.image_url} alt={value.caption} /></Link>
                                        </div></div>
                                    )
                                })}
                                    
                                </div>
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