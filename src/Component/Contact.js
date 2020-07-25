import React, { Component } from 'react'
import InnerPage from './InnerPage'
import Footer from './Footer'


export class Contact extends Component {
    render() {
        return (
            <>
            <InnerPage/>
            <div className="container-fluid py-5">
              <div>
              <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12  col-xs-block col-xs-12 col-sm-12 py-3" style={{backgroundColor:"#733873"}}>
                            <div className="card border-0  py-2" style={{backgroundColor:"#733873"}}>
                                <div className="card-body text-white " style={{backgroundColor:"#733873"}}>
                                </div>
                                <h2 className="card-body font-weight-bolder pl-5 py-4 text-white" style={{fontSize:"50px",backgroundColor:"#733873" }}>Contact Us</h2>
                            </div>
                        </div>
                        
                    </div>
                    <div className="card border-0 py-2">
                                <div className="card-body">
                                </div>
                                <h2 className="card-body font-weight-bolder pl-5 py-4" style={{fontSize:"50px",color:"#733873" }}>A Platform Built Around Moving parcel to your Customer!</h2>
                            </div>
                            </div>
</div>


<div className="container-fluid py-5 rounded center shadow py-5">
<div className="container text-center">
<div className="row justify-content-center">    
<div className="col-md-12 col-lg-8 col-sm-12  col-xs-block col-xs-12 col-sm-12 text-left ">
<div className="card text-white py-3">
<form className="border-0">
<div className="form-group col-md-12 col-lg-12 col-sm-12  col-xs-block col-xs-12 col-sm-12  text-left text-dark">
<label for="receiver-name text-center text-left">Name</label>
<input type="text" className="form-control   px-4 py-3" id="receiver-name" placeholder="Name" />
                        </div>
                        <div className="form-group col-md-12 col-lg-12 col-sm-12  col-xs-block col-xs-12 col-sm-12   text-left text-dark">
                          <label for="receiver-name text-center text-left">Phone Number</label>
                          <div className="input-group mb-2">
                            <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Number" />
                          </div>
                        </div>
<div className="form-group col-md-12 col-lg-12 col-sm-12  col-xs-block col-xs-12 col-sm-12   text-left text-dark">
<label for="receiver-name text-center text-left">Email</label>
<div className="input-group mb-2">
        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Email"/>
      </div>
    </div>
    <div className="col-md-12 col-lg-12 col-sm-12  col-xs-block col-xs-12 col-sm-12">
      <div className="form-check p-0">
      <div className="form-group text-left text-dark">
      <label for="receiver-name text-center text-left">Message</label>
    <textarea className="form-control"  rows="3"></textarea>
  </div>
      </div>
    </div>
<div class="form-group row ml-3 text-dark ml-3 text-center">
<div className="col-md-12 col-lg-12 col-sm-12  col-xs-block col-xs-12 col-sm-12 py-3 w-100 rounded">
      <button type="submit" formMethod="post" className="btn  w-50 text-white font-weight-bolder" style={{backgroundColor:"#733873"}}>Submit</button>
    </div>
</div>
</form> 
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

export default Contact
