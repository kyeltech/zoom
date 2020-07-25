import React, { Component } from 'react'
import Header from '../Component/Header'
import bikeOne from './images/bikeOne.gif'
import delivery from './images/Icons/delivery.gif'
import trust from './images/Icons/trust.svg'
import medal from './images/Icons/medal.gif'
import pin from './images/Icons/pin.gif'
import Footer from './Footer'

import '../App.css'

export class Home extends Component {
constructor(props) {
super(props)

this.state = {
companyName: '',
companyWebsite: '',
Goods: '',
lga: '',
state: '',
address: '',
firstName: '',
lastName: '',
phoneNumber: '',
email: '',
}
}

handleSubmit(event) {
alert('i just submitted : ' + this.state);
event.preventDefault();
}

render() {
return (
<>
<div className="w-100" style={{ position: "fixed" , zIndex: 100000 }} id="home">
<Header />
</div>
<div className="container-fluid py-5 home"  style={{backgroundColor:"#f9cdb9", height:"auto%"}}>
<div className="container py-5" >
<div className="row">
<div className=" col-md-12 col-lg-6 py-5 text-left d-sm-none d-lg-block d-md-block d-none col-xl-6 ">
<div className="card bg-transparent border-0 ">
<div className="card-body py-5">
								<h1 className="   font-weight-bolder py-3 " style={{ lineHeight: 1.4, fontSize: "40px", color: "#733873" }}> on time, anytime, every time, all the time </h1>
<a href="#how" className="btn  text-white m-2 font-weight-bold" style={{backgroundColor:"#733873"}}>How it Works</a>
</div>
</div>
</div>
<div className="col-md-12 col-lg-6 col-xl-6 pt-5 d-none d-lg-block d-xl-block d-md-block  " style={{backgroundColor:"#f9cdb9"}}>
<div className="card border-0 pl-5" style={{backgroundColor:"#f9cdb9"}}>
<div className="card-body " style={{backgroundColor:"##f9cdb9"}}>
<center>
<img src={bikeOne} className="img-fluid" alt="Vehicle" style={{backgroundColor:"#f9cdb9 "}} />
</center>

</div>
</div>
</div>
<div className=" col-md-12 d-md-none ">
<div className="card bg-transparent border-0 ">
<div className="card-body py-5">
<h1 className="   font-weight-bolder" style={{ lineHeight: 1.4, fontSize:"40px",  color:"#733873"}}> At ZOOM247 delivery service, we deliver with speed off time</h1>
<a href="#how" className="btn  text-white m-2 font-weight-bold" style={{backgroundColor:"#733873"}}>How it Works</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="container-fluid py-5" id="how">
<div className="container" id="ship">
<div className="row">
<div className="col-md-12 col-lg-12 col-sm-12">
<div className="card border-0">
<div className="card-body text-center">
<h5 className="font-weight-bold" style={{fontSize: "30px", color:"#733873"}}><img src={trust}  alt="reliable" width="5%"/> Trust Zoom for Safety</h5>
<p>At ZOOM247 deliver service, we deliver with speed off time.</p>
</div>
</div>
{/* <div className="container-fluid" >
<div className="container"> */}
<div className="row md-3 mt-3 ">
<div className="col-md-12 col-lg-4 col-sm-12 col-sm-12 col-xs-12 border-0 py-4">
<div className="card bg-light shadow py-4">
<div className="card-body text-center ">
<center className="bg-center  move py-2">
<img src={delivery} alt="carrier" className="img-fluid py-3" width="70" />
</center>
<h5 className="font-weight-bold">FAST DELIVERY</h5>
<p className="text">Sign up now for Quick Deliveries that you can trust timelessly with zoom </p>
</div>
</div>
</div>
<div className="col-md-12 col-lg-4 col-sm-12 border-0 py-4">
<div className="card bg-light shadow py-4">
<div className="card-body text-center ">
<center className="bg-center  move">
<img src={pin} alt="carrier" className="img-fluid py-3" width="30" />
</center>
<h5 className="font-weight-bold"> TRACKING</h5>
<p>Have peace of mind with our real-time tracking service. We update parcel info till final delivery.</p>
</div>
</div>
</div>
<div className="col-md-12  col-sm-12 col-lg-4 border-0 py-4">
<div className="card bg-light shadow py-4">
<div className="card-body text-center ">
<center className="bg-center  move">
<img src={medal} alt="carrier" className="img-fluid py-3" width="30" />
</center>
<h5 className="font-weight-bold">PICK UP SERVICE</h5>
<p>Avoid traffic stress. Use our online form to place orders, our trained riders will pickup and deliver.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* </div>
</div> */}
<Footer />
</>
);
}
}

export default Home
