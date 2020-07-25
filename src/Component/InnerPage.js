import React from 'react';

import {
    Link
    // useParams
  } from "react-router-dom";
import DELIVERY from '../Component/images/DELIVERY.gif'

export default class Header extends React.Component{
    render(){
        return (
            // <Router>

      
            <nav className="navbar navbar-expand-lg navbar-light py-3 btn-outline-secondary fixed-top" style={{ backgroundColor: '#ffffff' }}>
          <div className="container fixed" id="header">
          <Link to="/" style={{width:"20%"}}><img src={DELIVERY} alt="logo" width="100%"/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse py-3" id="navbarNav">
            <ul className="navbar-nav ml-5 mr-3 font-weight-bolder">
              <li className="nav-item active text-right mr-3">
                <Link to="/" className="nav-link ">Home</Link>
              </li>
              <li className="nav-item text-right">
                <Link className="nav-link  mr-3" id="track" to="/about">About Us</Link>
              </li>
              {/* <li className="nav-item text-right">
                <Link className="nav-link  mr-3" id="track" to="/send">Send parcel</Link>
              </li> */}
              <li className="nav-item text-right">
                <Link className="nav-link mr-3" id="track" to="/track">Track order</Link>
              </li>
              <li className="nav-item text-right">
                <Link className="nav-link  mr-3" id="track" to="/contact">Contact Us</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/send"className="btn   text-white font-weight-bolder" style={{backgroundColor:"#f06430"}}>Send parcel</Link>
              </li>
            </ul>
           
          </div>
        
            </div>  
            </nav>
            // </Router>
          );
    }
}