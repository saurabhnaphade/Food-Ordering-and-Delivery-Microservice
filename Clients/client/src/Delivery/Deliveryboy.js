import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../Product/snacks.css'
import HeaderAdmin from '../Header/HeaderAdmin'
const Deliveryboy = () => {

    const [allDetails, setDetails] = useState([])

    const history = useHistory()

    useEffect(() => {
        getDetails()
    }
        , [])

    const getDetails = () => {




        const url = 'http://localhost:8200'
        axios.get(url + '/alldeliveryboys').then((response) => {

            const result = response.data
            if (result.status === 'success') {
                setDetails(result.data)

            }
            else {

                alert('error occured while getting details')

            }
        })

    }

    return (
        <div className="adminstyle">
            <HeaderAdmin />
            <div className="">
                <h2><center>All Delivery Boy Details</center></h2>
                <div><center><button className="btn btn-success" onClick={()=>{history.push('/adddeliveryboy')}}>Add Delivery Boy</button></center>
                    <div className="container">

                        <hr />
                        <table className="table table-striped table-responsive">
                            <thead>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Zipcode</th>
                                <th>Mobile</th>

                            </thead>
                            <tbody>
                                {
                                    allDetails.map((delivery) => {
                                        return (
                                            <tr>
                                                <td>{delivery.fname} {delivery.lname}</td>
                                                <td>{delivery.email}</td>
                                                <td>{delivery.address}</td>
                                                <td>{delivery.zipcode}</td>
                                                <td>{delivery.phone}</td>
                                                <td>{delivery.role}</td>
                                                <button className="btn btn-danger" onClick={()=>{history.push('/deletedeliveryboy',{delivery : delivery})}} >Delete</button>
                                            </tr>

                                        )
                                    })

                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Deliveryboy

{/* <div className="container">
            <div><h2>{title}</h2></div>
            <hr />
            <table className="table table-striped table-responsive">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Zipcode</th>
                    <th>Mobile</th>
                    <th>Role</th>
                </thead>
                <tbody>
            {
                items.map((item)=>{
                    return(
                        <tr>
                            <td>{item.fname} {item.lname}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.zipcode}</td>
                            <td>{item.phone}</td>
                            <td>{item.role}</td>
                            <button className="btn btn-danger" >Delete</button>
                        </tr>    
                        
                    )
                })
                
            }
            </tbody>
            </table>
        </div> */}
