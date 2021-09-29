import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import '../Payment/Payment.css'
import {  useContext } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


const Payment = () => {

   const [cardNum, setCardNum] = useState(0)
   const [expiry, setExpiry] = useState('')
   const [cvv, setCvv] = useState(0)

    const history = useHistory()
    const location = useLocation()
    const details = location.state.order


    const processpayment = () => {

      const data = {
        name : details.custname,
        cardnumber : cardNum , 
        expirydate : expiry ,
        cvv : cvv ,
        orderid : details.orderid
      }

      const url = 'http://localhost:8600'
      axios.post(url+'/savepayment',data).then((response)=>{
                
                  const result = response.data
                  
                  
                  if(result.status === 'success'){
                      alert('Payment Done Successfully')
                      history.push('/customerhome')
                      
                     }
                  else{
                      alert('Error While Doing Payment')
                  }
              })
          }
     
        console.log(details)
    
    return (
            <div>
                <div className="container-fluid">
        <div className="row justify-content-center">
          <div className=" col-lg-6 col-md-8">
            <div className="card p-3">
              <div className="row justify-content-center">
                <div className="col-12">
                  <h2 className="heading text-center">Payment Gateway</h2>
                </div>
              </div>
              <form onsubmit="event.preventDefault()" className="form-card">
                <div className="row justify-content-center mb-4 radio-group">
                  <div className="col-sm-3 col-5">
                    <div className="radio selected mx-auto" data-value="dk"> <img className="fit-image" src="https://i.imgur.com/5TqiRQV.jpg" width="105px" height="55px" /> </div>
                  </div>
                  <div className="col-sm-3 col-5">
                    <div className="radio mx-auto" data-value="visa"> <img className="fit-image" src="https://i.imgur.com/OdxcctP.jpg" width="105px" height="55px" /> </div>
                  </div>
                  <div className="col-sm-3 col-5">
                    <div className="radio mx-auto" data-value="master"> <img className="fit-image" src="https://i.imgur.com/WIAP9Ku.jpg" width="105px" height="55px" /> </div>
                  </div>
                  <div className="col-sm-3 col-5">
                    <div className="radio mx-auto" data-value="paypal"> <img className="fit-image" src="https://i.imgur.com/cMk1MtK.jpg" width="105px" height="55px" /> </div>
                  </div> <br />
                </div>
                <div className="row justify-content-center form-group">
                  <div className="col-12 px-auto">
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="input-group"> <input type="text" name="Name" value={details.custname} /> <label>Name</label>  </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="input-group"> <input type="text" id="cr_no" name="card-no" placeholder="0000 0000 0000 0000" minLength={19} maxLength={19} onChange={(event) => {
                setCardNum(event.target.value)
              }}/> <label>Card Number</label> </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6">
                        <div className="input-group"> <input type="text" id="exp" name="expdate" placeholder="MM/YY" minLength={5} maxLength={5} onChange={(event) => {
                setExpiry(event.target.value)
              }} /> <label>Expiry Date</label> </div>
                      </div>
                      <div className="col-6">
                        <div className="input-group"> <input type="password" name="cvv" placeholder="●●●" minLength={3} maxLength={3} onChange={(event) => {
                setCvv(event.target.value)
              }}/> <label>CVV</label> </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                <center><div className="col-md-12"><button className="btn btn-primary" onClick={processpayment}>Payment</button> </div></center> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
}

export default Payment
