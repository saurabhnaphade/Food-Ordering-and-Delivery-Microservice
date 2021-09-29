import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {  useContext } from 'react'
import UserContext from '../UserContext/UserContext'
import { useHistory } from 'react-router'
import Header1 from '../Header/Header1'

const DeliveryActiveOrder = () => {

    const [orderid,setOrderid] = useState(0)
    const [deliverydetails,setDeliverydetails] = useState([])
    const {value , setValue} = useContext(UserContext)
    const history = useHistory()

    useEffect(() => {
        getActiveOrders()
    }
        , [])


    console.log(orderid)

    const getActiveOrders= () =>{

        const restaurantname = localStorage.getItem("hotel")

        const url = 'http://localhost:8300'
  
        console.log(restaurantname)
        axios.get(url+'/getallorders/' + restaurantname).then((response)=>{
          
            const result = response.data
            
            
            if(result.status === 'success'){
                
                setDeliverydetails(result.data)
                console.log(result.data)
            
    
            }
            else{
                alert('Error While Adding Data')
            }
        })

    }

    // const acceptOrder = () => {

        
    //     const url = 'http://localhost:8500'
  

    //     axios.put(url+'/updatestatus/{orderid}/Fowarded For Delivery').then((response)=>{
          
    //         const result = response.data;

    //         if(result.status === 'success'){
    //             alert('Order Accepted')
               
    //         }
    //         else{
    //             alert('Error while Acception order')
    //         }
    //     })
    // }

    const rejectOrder = () => {
        
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

            deliverydetails.map((item)=>{

                if(item.is_active == 1  && item.status == "Fowarded For Delivery" || item.status == "Accepted By Delivery Person"){

                    
                // setOrderid(item.orderid)

                return(
                    <tr>
                        <td>{item.custname} </td>
                        <td>{item.restaurantname} </td>
                        <td>{item.cust_address}</td>
                        <td>{item.totalitems}</td>
                        <td>{item.total_price}</td>
                        <td>{item.status}</td>
                        
                        <button className="btn btn-success fixed" onClick={() => {
                            const url = 'http://localhost:8500'
  
                            setOrderid(item.orderid)
                            console.log(orderid)
                            console.log(value.data.deliveryboy_id)
                            const deliveryid = value.data.deliveryboy_id
                            axios.put(url+'/deliveryAccept/'+orderid+'/'+deliveryid).then((response)=>{
                              
                                const result = response.data;
                    
                                if(result.status === 'success'){
                                    alert('Order Accepted')
                                    history.push('/ondelivery')
                                }
                                else{
                                    alert('Error while Acception order')
                                }
                            })
                        }}>Accept Order</button>
                        
                        
                            
                        
                        {/* <button className="btn btn-warning " onClick={() => {
                            const url = 'http://localhost:8500'
  
                            setOrderid(item.orderid)
                            console.log(orderid)
                            axios.put(url+'/markasdelivered/' + orderid).then((response)=>{
                              
                                const result = response.data;
                    
                                if(result.status === 'success'){
                                    alert('Order Delivered')
                                   history.push('/deliveryactiveorder')
                                }
                                else{
                                    alert('Error while Delivering the order')
                                }
                            })
                        }}>Mark As Delivered</button> */}
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

export default DeliveryActiveOrder




