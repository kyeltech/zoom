import React from 'react';
import { FaFacebook, FaInstagram, FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import '../App.css'
import {Link } from 'react-router-dom'

export default class Footer extends React.Component {
    
    render() {
        return (
            <div className="container-fluid pt-5 pb-0" style={{backgroundColor: "#f06430"}}>
                <div className="container" id="footer">

                    <div className="row" >
                        <div className="col-md-4 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12">
                            <div className="card border-0"  style={{backgroundColor: "#f06430"}}>
                                <div className="card-body">
                                    <div class="list-group">
                                        <p className="list-group-item head  text-white border-0"  style={{backgroundColor: "#f06430"}}>Mondays to Fridays 8:30am to 5:00pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12">
                            <div className="card border-0"  style={{backgroundColor: "#f06430"}}>
                                <div className="card-body">
                                    <div class="list-group">
                                    <p className="list-group-item head  text-white border-0" style={{backgroundColor: "#f06430"}}>For enquire:<a href="ddd" className="text-white">info@zoom247.com</a> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12">
                            <div className="card border-0 " style={{backgroundColor: "#f06430"}}>
                                <div className="card-body">
                                    <div class="list-group">
                                        <p className="list-group-item head text-white border-0" style={{backgroundColor: "#f06430"}}>Lagos-Nigeria</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                  
                    {/* <div class="row border"> */}
                    <div className="col-md-4 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12 ">
                            <div className="card border-0" style={{ backgroundColor: "#f06430" }}>
                                <h4 className="text-white">Quick Links</h4>
                                <div className="card-body text-white">
                                   <li class="nav-link"><Link to="/Send" className="mx-2 text-white">Send parcel</Link></li>
                                   <li class="nav-link"><Link to="/Track" className="mx-2 text-white">Track parcel</Link></li>
                                    <li class="nav-link"><Link to="/About" className="mx-2 text-white">About Us</Link></li>
                                    <li class="nav-link"><Link to="/Contact" className="mx-2 text-white">Contact Us</Link></li>
                                </div>
                            </div>
                            
                            {/* </div> */}
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12 ">
                            <div className="card border-0" style={{ backgroundColor: "#f06430" }}>
                                <h4 className="text-white">What We Do</h4>
                                <div className="card-body text-white">
                                    <li class="nav-link"></li>
                                    <li class="nav-link"></li>
                                    <li class="nav-link"></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12 ">
                            <div className="card border-0" style={{ backgroundColor: "#f06430" }}>
                                <h4 className="text-white">Contact Us</h4>
                                <div className="card-body text-white">
                                    <li class="nav-link">070250000031, 09072222445, 081700000267, 0811100338888, 07025000032, 09072222446, 08170000268, 08111003399</li>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12  col-xs-block col-xs-12 col-sm-12">
                            <div className="card border-0 " style={{backgroundColor: "#f06430"}}>
                                <div className="card-body text-center text-white">
                                    <a href="https://web.facebook.com" className="mx-2 text-white img-fluid"><FaFacebook /> </a>
                                    <a href="https://web.instagram.com" className="mx-2 text-white img-fluid"><FaInstagram /></a>
                                    <a href="https://web.twitter.com" className="mx-2 text-white img-fluid"><AiFillTwitterCircle /></a>
                                    <a href="https://web.google.com" className="mx-2 text-white img-fluid"><FaGooglePlus /></a>
                                    <a href="https://web.linkedin.com" className="mx-2 text-white img-fluid"> < AiFillLinkedin /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                       
                            <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12  col-xs-block col-xs-12 col-sm-12">
                                <div className="card-body text-white">
                                    <div className="copyright">Copyright @ <k className="" style={{color: "f06430"}}>Zoom247 delivery service</k> 2020. All Rights Reserved</div>
                                </div>
                            </div>
                      
                        </div>
                        
                    </div>
                    

                </div>
        );
    }
}