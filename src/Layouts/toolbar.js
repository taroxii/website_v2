import React, { Component } from 'react';
const Toolbar = (props) => {
    return (
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
    )
}
export default Toolbar;