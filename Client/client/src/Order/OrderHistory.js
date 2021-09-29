import React from 'react'
import { useHistory} from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react'
import {  useContext } from 'react'
import { CartProvider, useCart } from "react-use-cart";
import UserContext from '../Session/UserContext'
import './OrderDetails.css'

export const OrderHistory = () => {
  const [details,setDetails] = useState([])
  const {value , setValue} = useContext(UserContext)

  const history = useHistory()

  useEffect(() => {
    getorderhistory()
}
    , [])

  const getorderhistory=()=>{

    const cname = value.data.fname + " " +value.data.lname



    const url = 'http://localhost:8080'
  
        
    axios.get(url+'/getallorders/'+cname).then((response)=>{
      
        const result = response.data
        
        
        if(result.status === 'success'){
            
            setDetails(result.data)
            
        

        }
        else{
            alert('Error While Adding Data')
        }
    })
}

    return (
        <div className="container">
        <div><h2>Order History</h2></div>
        <hr />
        <table className="table table-striped table-responsive">
            <thead>
                <th>Customer Name</th>
                <th>Restaurant Name</th>
                <th>Customer Address</th>
                <th>Total Items</th>
                <th>Total Price</th>
                <th>Status</th>
                
            </thead>
            <tbody>
        {
            details.map((item)=>{
                return(
                    <tr>
                        <td>{item.custname} </td>
                        <td>{item.restaurantname} </td>
                        <td>{item.cust_address}</td>
                        <td>{item.totalitems}</td>
                        <td>{item.total_price}</td>
                        <td>{item.status}</td>
                        
                        <button className="btn btn-primary fixed" onClick={()=>{history.push('/orderdetails',{item : item.fooditems})}}>Order Details</button>
                        <button className="btn btn-primary fixed" onClick={()=>{history.push('/paymentdetails',{item : item})}}>Payment Details</button>
                    </tr>    
                    
                )
            })
            
        }
        </tbody>
        </table>
    </div>
    )
}

