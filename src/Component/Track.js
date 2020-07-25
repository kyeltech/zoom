import React, { Component } from 'react'
import '../App.css'
import Footer from './Footer'
import InnerPage from './InnerPage'


export class Track extends Component {
    render() {
        return (
            <div>
                <div className="w-100" style={{ position: "fixed", zIndex: 100000 }}>
                  <InnerPage/>
                </div>
                <div className="container-fluid py-5">
                     <div className="container py-5">
                        <div className="row">
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-8 col-sm-12">
                                <div className="card p-3" style={{backgroundColor:"#733873"}}>
                                    <div className="card-header text-white border-0 text-center">
                                    <h5 className="font-weight-bold">Fast and relaible</h5>  
                                    <p >With <k style={{color: "#f06430", fontWeight: "bolder"}} className="bg-transaprent">Zoom247</k> tracking of your items  just became easier.</p>  
                                    </div>
                                    <div className="card-body">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Waybill Number" aria-label="Waybill Number" aria-describedby="button-addon2" />
                                            <div class="input-group-append">
                                                <button class="btn text-white button" style={{backgroundColor:"#f06430"}} type="submit" id="button-addon2">Track it</button>
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

export default Track
