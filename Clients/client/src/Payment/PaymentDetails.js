import React from 'react'
import axios from 'axios'
import { Link,useHistory ,useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
const PaymentDetails = () => {
    const [payment,setPayment] = useState('')

    const location = useLocation()
    const item = location.state.item

    const history = useHistory()

    useEffect(() => {
        getPayment()
    }
        , [])
    const getPayment = () => {
        const url = 'http://localhost:8600'
        axios.get(url + "/payment/"+item.orderid).then((response) => {
            console.log(response)
            console.log(response.data)
            const result = response.data
            
            if (result.status === 'success') {
                setPayment(result.data)
               
            }
            else {

                alert('error occured while getting details')

            }
        })
    } 

    return (
        <div className="container">
        <div><h2>Payment Details</h2></div>
        <hr />
        <table className="table table-striped table-responsive">
            <thead>
                <th>Customer Name</th>
                <th>Card Number</th>
                <th>Expiry Date</th>
                <th>Cvv</th>
                <th>Amount</th>
              
            </thead>
            <tbody>
        
            
                    <tr>
                        <td>{item.custname} </td>
                        <td>{payment.cardnumber}</td>
                        <td>{payment.expirydate}</td>
                        <td>{payment.cvv}</td>
                        <td>{item.total_price}</td>
                  
                       
                    </tr>    
                    
            
        
        
        </tbody>
        </table>
        <center> <button className="btn btn-warning" onClick={()=>{history.push('/orderhistory')}}>Back</button></center>
    </div>
    )
}

export default PaymentDetails
