import React, { Component } from 'react'
import InnerPage from  './InnerPage'
import Footer from './Footer'
import '../App.css'
import two from './images/Icons/two.svg'
import three from './images/Icons/three.svg'
import one from './images/Icons/one.svg'
import bird from './images/Icons/bird.svg'
import {
    Link

  } from "react-router-dom";

export class Send extends Component {
render() {
return (

<>
<InnerPage />  
<div className="container-fluid "style={{backgroundColor:"#733873"}}>
<div className="container" >
<div className="row ">    
<div className="col-md-12  border-0" >
<div className="card border-0 bg-transparent text-white py-5">
<div className="card-body py-5">
<p className="py-2 border-0 font-weight-boolder py-5" style={{ fontSize:"30px",}} >Contact Zoom today to experinee the future of logistics  </p>   
<Link to="/contact" class="btn location" style={{backgroundColor:"#f06430", color:"#ffffff",}}>Contact us</Link>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="container-fluid py-5 rounded center">
<div className="container text-center">
<div className="row justify-content-center">    
<div className="col-md-12 col-lg-10 col-sm-12 d-block text-left shadow">
<div className="card text-white py-3">
<div className="card-body text-dark bg-transparent font-weight-bolder"><span>Contact <k className="font-weight-bolder" style={{fontSize: "40px", color:"#f06430"}}>Zoom247</k> today to experience the future of logistics <img src={bird} alt="bird" width="5%"/></span></div>
<form method="post" action="">
<div className="form-group  col-md-12 col-lg-12 col-sm-12 d-block text-dark ">
<label for="pick-up-address text-left border">Pickup Address Info</label>
<input type="text" className="form-control border rounded-pill px-4 py-3" id="pick-up-address" placeholder="Pickup address" required="true"/>
</div>
<div className="form-group col-md-12 col-lg-12 col-sm-12 d-block text-dark ">
<label for="sender-name text-left">Sender Name</label>
<input type="text" className="form-control border rounded-pill px-4 py-3" id="sender-name" placeholder="Sender name" required="true"/>
</div>
<div className="form-group col-md-12 col-lg-12 col-sm-12 d-block text-dark ">
<label for="sender-name">Phone Number</label>
<input type="number" className="form-control border rounded-pill px-4 py-3" id="phone-number" placeholder="Phone-number" required="true" />
</div>
<div className="form-group col-md-12 col-lg-12 col-sm-12 d-block text-dark">
<label for="item-description">Item Description</label>
<textarea name="" id="item-description" cols="30" rows="6" className="form-control border px-4 py-3"></textarea>
</div>
<div className="form-group col-md-12 col-lg-12 col-sm-12 d-block text-dark">
<label for="VehicleType">Vehicle Type</label>
<select  name="vehicle" placeholder="select vehicle" id="state" className="form-control border rounded-pill px-4">
<option>MOTOR BIKE</option>
<option>CAR</option>
<option>MINI VAN</option>
<option>TRUCK</option>
</select>
</div>
<div className="form-group col-md-12 col-lg-12 col-sm-12 d-block text-dark">
<label for="VehicleType">Size of Item</label>
<select  name="vehicle" placeholder="select vehicle" id="state" className="form-control border rounded-pill px-4">
<option value="Below 10">Below 10</option>
<option value="Below 20">Below 20</option>
<option value="Below 50">Below 50</option>
<option value="Below 100">Bwlow 100</option>
</select>
</div>

<div className="card border-0">
<div className="px-5 card-body bordeer-0 text-dark">
<h5 className="font-weight-bold ">Receiver's Info:</h5>
</div>
</div>
<div className="form-group col-md-12 col-lg-12 col-sm-12 d-block text-left text-dark">
<label for="receiver-name text-center text-left">Receiver Name</label>
<input type="text" className="form-control  rounded-pill px-4 py-3" id="receiver-name" placeholder="Receiver name" />
</div>
<div className="form-group col-md-12  col-xs-12 col-sm-12 col-lg-12 col-xl-4  text-left text-dark">
<label for="phone-number text-left">Phone Number</label>
<input type="tel" className="form-control  rounded-pill px-4 py-3" id="phone-number" placeholder="Phone Number" />
</div>

<div className="form-group col-md-12  col-xs-12 col-sm-12 col-lg-12 col-xl-4 text-left text-dark">
<label for="phone-number text-left">Delivery Address</label>
<input type="text" className="form-control  rounded-pill px-4 py-3" id="phone-number" placeholder="Drop-off Address" />
</div>
<div class="form-group row ml-3 text-dark ml-3">
<div class="col-md-12  col-xs-12 col-sm-12 col-lg-12 col-xl-4">
<button type="submit"  class="btn text-white" style={{backgroundColor:"#f06430"}}>Send parceel</button>
</div>
</div>
</form> 
</div>
</div>  
 
</div>
</div>
</div>


<div className="container-fluid bg-light">
<div classNme="container">
<div className="row ">
<div className="col-md-12  col-xs-12 col-sm-12 col-lg-12 col-xl-12 border-0 p-5 text-center">
<div className="card border-0 bg-light ">
<div className="card-header border-0 bg-transparent"></div>
<p className="font-weight-bolder text-center " style={{fontSize:"50px"}}>What Happens Next? </p>
<p>Congratulations! You are now one step closer to building your perfect logistic process with us </p>
</div>
<div className="card-body">
</div>
</div>

</div>
<div className="row">
<div className="col-md-12  col-xs-12 col-sm-12 col-lg-4 col-xl-4 border-0 py-4">
<div className="card border-0 bg-light shadow p-4">
<div className="card-body ">
<div className="img-fluid bg-transparent border-0 "><img src={one} alt="two" width="20%" /></div>
<div className="card-header bg-transparent border-0 font-weight-bolder" style={{fontSize:"18px"}}>We will prepare your item</div>
<p>Our customer support team will tailor-make your item ready for delivery. </p>
</div>
</div>
</div>
<div className="col-md-12 col-lg-4 col-sm-12 border-0 py-4">
<div className="card border-0 bg-light shadow p-2">
<div className="card-body carder">
<div className="img-fluid bg-transparent border-0">
<img src={two} alt="two" width="20%" />
</div>
<div className="card-header bg-transparent border-0 font-weight-bolder" style={{fontSize:"16px"}}>Send your parcel</div>
<p>We’ll be with you every step of the way with our comprehensive customer implementation support
</p>
</div>
</div>
</div>
<div className="col-md-12 col-lg-4 col-sm-12 col-lx-4 border-0 py-3">
<div className="card border-0 bg-light shadow p-4">
<div className="card-body carders">
<div className="img-fluid bg-transparent border-0">
  <img src={three} alt="two" width="20%" /></div>
<div className="card-header bg-transparent border-0 font-weight-bolder" style={{fontSize:"18px"}}>Then you are free to Zoom247</div>
<p>your item is delivered safe to it destination, Thank's for choosing zoom</p>
</div>
</div>
</div>

</div>
</div>
</div>



<Footer />

</>
)
}
}

export default Send;
