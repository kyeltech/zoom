import React, { Component } from 'react'
import InnerPage from './InnerPage'
import Guy from './images/Guy.png'
import Footer from './Footer'
import support from './images/Icons/support.svg'
import consumer from './images/Icons/consumer.svg'
import audit from './images/Icons/audit.svg'
import order from './images/Icons/order.svg'
import state from './images/Icons/state.svg'
import mission from './images/Icons/mission.svg'
import look from './images/Icons/look.svg'
import '../App.css'
import '../index.css'

export class About extends Component {
    render() {
        return (
            <div>
              <InnerPage/>
              <div className="container-fluid py-5">
              <div className="row ">
                        <div className="col-md-12 col-lg-12 col-sm-12 py-3" style={{backgroundColor:"#733873"}}>
                            <div className="card border-0  py-2" style={{backgroundColor:"#733873"}}>
                                <div className="card-body text-white " style={{backgroundColor:"#733873"}}>
                                </div>
                                <h2 className="card-body font-weight-bolder pl-5 py-4 text-white" style={{fontSize:"50px",backgroundColor:"#733873" }}>About Us</h2>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row py-5">
                        <div className="col-md-12 col-lg-12 col-sm-12 text-center ">
                            <div className="card border-0 ">
                                <div className="card-body  ">
                                    <h4 className="bg-transparent border-0 font-weight-bolder" style={{ fontSize: "30px", color: "#733873" }}>Introduction to delivery service</h4>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-4 col-sm-12">
                                <div className="  bg-transparent">
                                   <img className="img-fluid" src={Guy} alt="delivery" />               
                                
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8 col-sm-12 col-xs-12">
                            <div className="row py-5 bg">
                                    <p className="card-header border-0 bg-transparent text-white" style={{fontSize:"20px", lineHeight:"1.6em", fontWeight: "600"}}>Zoom247 is used by enterprises across industries, combining the power of client trust with quick deliveries</p>
                                <div className="col-md-12 col-lg-3  text-white bg-transparent border-0 py-5">
                                            <img src={order} width="20%" alt="delivery" className="py-2"/><br/>
                                       <span className=""   style={{fontSize:"17px "}}>We deliver efficiency and transparency in the freight procurement process.</span>
                                       </div>
                                <div className="col-md-12 col-lg-3 text-white  bg-transparent border-0 py-5">
                                            <img src={consumer} width="20%" alt="delivery" className="py-2" /><br />
                                           <span className="" style={{fontSize:"17px "}}>Gain unique insights through our auto-generated reports for fast, data-driven decision-making.</span>
                                       </div>
                                <div className="col-md-12 col-lg-3 text-white   bg-transparent border-0 py-5 ">
                                            <img src={audit} width="20%" alt="delivery" className="py-2" /><br />
                                           <span className="" style={{fontSize:"17px",}}>Free your auditing department from time-consuming manual review and documentation.</span>
                                       </div>
                                        <div className="col-md-12 col-lg-3 text-white  bg-transparent border-0 py-5">
                                            <img src={support} width="20%" alt="delivery" className="py-2" /><br />
                                           <span className=""style={{fontSize:"17px ", }}>Round-the-clock support - our experts are there to support, through the process .</span>
                                       </div>
                            </div>
                        </div>
                        </div>
                        <div className="container-fluid py-5">
                            <div className="container">
                                <div className="row">
                                <div className="col-md-12 col-lg-6 p-5">
                                    <div className="card shadow">
                                    <div className="card-header bg-transparent border-bottom-0  text-center py-3" style={{ fontSize: '20px' }}>
                                        <img src={mission} width="12%" alt="mission"/>
                                        <h2 className="font-weight-bold  ml-3 py-3">Our Mission</h2> 
                                       </div>
                                        <div className="card-body " >
                                            Zoom 24/7 is committed to providing its client with professional and outstanding delivery experience around the clock at reasonable rates. Zoom 24/7
                                            partners with its clients individual and businesses and enables them to prosper by delivering 
                                            their packages and products on time, thereby achieving goals and targets.
                                        </div>
                                    </div>
                                    </div>
                                <div className="col-md-12 col-lg-6 p-5">
                                    <div className="card  shadow">
                                    <div className="card-header bg-transparent border-bottom-0 py-3" style={{ fontSize: '20px' }}>
                                        <img src={look} alt="vision" width="10%" />
                                        <h1 className="font-weight-bold"> Our Vision</h1>
                                         </div>
                                        <div className="card-body py-5 p-5">
                                            To be recognised and regarded as the most prominent and 
                                            most sought-after delivery service nationally and internationally.
                                         <span className="d-flex py-2">
                                          fast,
                                          Dependable,
                                          Secure,
                                          Customer-focused, 
                                          affordable
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                 <div className="container-fluid py-5 border-0 bg-light">
                     <div className="container border-0">
                         <div className="row border-0">
                             <div className="col-md-12 col-lg-12 col-sm-12  col-xs-block col-xs-12 col-sm-12 border-0 ">
                                 <div className="card border-0 bg-light">
                                     <h4 className="card-header border-0  font-weight-bolder bg-light" style={{fontSize:"25px"}}>Locations we serve</h4>
                                     <h6 className="font-weight-bold">Currently Available state</h6>
                                 </div>
                             </div>
                           
                         </div>
                         <div className="row border-0 py-5 ">
                             <div className="col-md-12 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12 border-0 py-4">
                                 <div className="card border-0 shadow ">
                                     <div className="card-header border-0 py-3">
                                         <img src={state} alt="state" width="20%" />
                                         <div className="card-text">Lagos state we are here for you</div>
                                     </div>
                                 </div>
                             </div>
                             <div className="col-md-12 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12 border-0 py-4">
                                 <div className="card border-0 shadow ">
                                     <div className="card-header border-0 py-3">
                                         <img src={state} alt="state" width="20%" />
                                         <div className="card-text">Enugu state we are here for you</div>
                                     </div>
                                 </div>
                             </div>
                         
                             <div className="col-md-12 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12 border-0 py-4">
                                 <div className="card border-0 shadow ">
                                     <div className="card-header border-0 py-3">
                                         <img src={state} alt="state" width="20%" />
                                         <div className="card-text">Lagos state we are here for you</div>
                                     </div>
                                 </div>
                             </div>
                             <div className="container-fluid"></div>
                             <div className="container ">
                             <div className="row">
                             <div className="col-md-12 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12 border-0 py-4">
                                 <div className="card border-0 shadow ">
                                     <div className="card-header border-0 py-3">
                                         <img src={state} alt="state" width="20%" />
                                         <div className="card-text">Lagos state  we are here for you</div>
                                     </div>
                                 </div>
                             </div>
                             <div className="col-md-12 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12 border-0 py-4">
                                 <div className="card border-0 shadow ">
                                     <div className="card-header border-0 py-3">
                                         <img src={state} alt="state" width="20%" />
                                         <div className="card-text">Lagos state we are here for you</div>
                                     </div>
                                 </div>
                             </div>
                             <div className="col-md-12 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12 border-0 py-4">
                                 <div className="card border-0 shadow ">
                                     <div className="card-header border-0 py-3">
                                         <img src={state} alt="state" width="20%" />
                                         <div className="card-text">Lagos state we are here for you</div>
                                     </div>
                                 </div>
                             </div>
                             <div className="col-md-12 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12 border-0 py-4">
                                 <div className="card border-0 shadow ">
                                     <div className="card-header border-0 py-3">
                                         <img src={state} alt="state" width="20%" />
                                         <div className="card-text">Lagos state we are here for you</div>
                                     </div>
                                 </div>
                             </div>
                             <div className="col-md-12 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12 border-0 py-4">
                                 <div className="card border-0 shadow ">
                                     <div className="card-header border-0 py-3">
                                         <img src={state} alt="state" width="20%" />
                                         <div className="card-text">Lagos state we are here for you</div>
                                     </div>
                                 </div>
                             </div>
                                 <div className="col-md-12 col-lg-4 col-sm-12  col-xs-block col-xs-12 col-sm-12 border-0 py-4">
                                 <div className="card border-0 shadow">
                                     <div className="card-header border-0 py-3">
                                         <img src={state} alt="state" width="20%" />
                                         <div className="card-text">Ogun state we are here for you</div>
                                     </div>
                                 </div>
                             </div>
                             </div>
                             </div>
                           
                           
                         </div>
                     </div>
                 </div>
        
        
            </div>
            <Footer />
        </div>
        )
    }
}

export default About
