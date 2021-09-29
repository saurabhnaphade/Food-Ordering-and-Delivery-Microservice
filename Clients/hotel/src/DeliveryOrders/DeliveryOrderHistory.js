import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {  useContext } from 'react'
import UserContext from '../UserContext/UserContext'
import { useHistory } from 'react-router'
import Header1 from '../Header/Header1'

export const DeliveryOrderHistory = () => {
    const [details,setDetails] = useState([])
    const {value , setValue} = useContext(UserContext)
    const history = useHistory()

    useEffect(() => {
        getActiveOrders()
    }
        , [])


    const getActiveOrders= () =>{

        const restaurantname = localStorage.getItem("hotel")

        const url = 'http://localhost:8500'
        
        console.log(value.data.deliveryboy_id)

        axios.get(url+'/getalldeliveryorder/' + value.data.deliveryboy_id).then((response)=>{
          
            const result = response.data
            
            
            if(result.status === 'success'){
                
                setDetails(result.data)
                console.log(result.data)
            
    
            }
            else{
                alert('Error While Adding Data')
            }
        })

    }

    return (
        <div className="container">
            <Header1/>
        <div><h2>Active Orders</h2></div>
        <hr />
        <table className="table table-striped table-responsive">
            <thead>
                <th>Customer Name</th>
                <th>Restaurant Name</th>
                <th>Customer Address</th>
                <th>Total Items</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Action</th>
                <th></th>
               
                
            </thead>
            <tbody>
        {
            details.map((item)=>{
                if(item.is_active == 0  || item.status == "Fowarded For Delivery"){
                return(
                    <tr>
                        <td>{item.custname} </td>
                        <td>{item.restaurantname} </td>
                        <td>{item.cust_address}</td>
                        <td>{item.totalitems}</td>
                        <td>{item.total_price}</td>
                        <td>{item.status}</td>
        
                        <button className="btn btn-primary fixed" onClick={()=>{history.push('/deliverydetails',{item : item.fooditems})}}>Order Details</button>
                    </tr>    
                    
                )
                }
            })
            
        }
        </tbody>
        </table>
    </div>
    )
  
}

