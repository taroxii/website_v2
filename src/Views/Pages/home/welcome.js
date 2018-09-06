import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import Slider from "../layouts/slider";

export default class Welcome extends Component {

    constructor(props){
        super(props);


        this.state = {
            title: '',


            sections: [
                {
                    id: 'section-1', 
                    name: 'ทัวร์แนะนำ', // title

                    p_url: '/',
                    options: {
                        column: {
                            value: 5,
                            style: 'square',
                        }
                    },
                    items: [
                        { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
                    ]
                }
                , {
                    id: 'section-2', 
                    name: 'ทัวร์มาใหม่', // title

                    p_url: '/',
                    options: {
                        column: {
                            value: 5,
                            style: 'square',
                        }
                    },
                    items: [
                          { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=103515&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=120304&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=120304&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=120304&w=276&h=276' }
                    ]
                }
                , {
                    id: 'section-3', 
                    name: 'ทัวร์ลดราคา', // title

                    p_url: '/',
                    options: {
                        column: {
                            value: 3,
                            style: 'square',
                        }
                    },
                    items: [
                        { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=120304&w=276&h=276' }
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=120304&w=276&h=276' }
        
                        , { link: '', caption: '', image_url: 'http://xn--l3cah2ct3d5ab7r.com/media/?id=120304&w=276&h=276' }
                    ]
                }
                , {
                    id: 'section-4', 
                    name: 'บทความท่องเที่ยว', // title

                    p_url: '/',
                    options: {
                        column: {
                            value: 3,
                            style: 'blog',
                        }
                    },
                    items: [
                        { link: '', caption: '', image_url: "http://xn--l3cah2ct3d5ab7r.com/public/uploads/0536e76b_021441bd903e86bd779d2a3e411f7b97_n.jpg" }
                        , { link: '', caption: '', image_url: "//s.isanook.com/jo/0/rp/rc/w227h128/ya0xac0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wL2M1MTRhNDNhZWFkZDY4Y2QvMzAw.jpg" }
        
                        , { link: '', caption: '', image_url: "//s.isanook.com/jo/0/rp/rc/w227h128/ya0xac0m1w0/aHR0cDovL2ltYWdlLmpvb3guY29tL0pPT1hjb3Zlci8wL2M1MTRhNDNhZWFkZDY4Y2QvMzAw.jpg" }
                    ]
                }
            ]

            
        };
    }

    render() {
        const {match} = this.props
        
        return (
            
            <div>
                <Slider />

                <div  className="container">
                    
                    
                    <div className="row two-columns home-main clearfix">
                        

                        <div className="col primary-content">

                            {this.state.sections.map(section=>{
                                return (
                                    <div key={section.id} className="module">
                                        <div className="page-title">
                                            <h1 className="title">{section.name}</h1>
                                            <Link className="link-more" to="/">ดูเพิ่ม</Link>
                                        </div>

                                        <div className={`ui-list style-${section.options.column.style} columns-${section.options.column.value}`}>

                                        {section.items.map((value,index)=>{
                                            return(
                                                <div key={index} className="item"><div className="inner">
                                                    <Link className="postImage" to={value.link}><img src={value.image_url} alt={value.caption} /></Link>
                                                </div></div>
                                            )
                                        })}
                                            
                                        </div>

                                    </div>
                                )
                           
                            })}

                        </div>

                        <div className="col-md-auto secondary-content">

                            <div className="module">
                                <div class="page-title"><h1 class="title">ทัวร์ต่างประเทศ</h1><a class="link-more" href="/">ดูเพิ่ม</a></div>
                            </div>
                            
                            <div className="module">
                                <div class="page-title"><h1 class="title">ทัวร์ในประเทศ</h1><a class="link-more" href="/">ดูเพิ่ม</a></div>

                                
                            </div>
                            
                        
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }
}