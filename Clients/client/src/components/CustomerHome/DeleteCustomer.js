import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios'

const DeleteCustomer = () => {

    const history = useHistory()

     const location = useLocation()
     const item = location.state.item
     const deletecustomer = ()=>{
         if (item.role==="admin"){
             alert('You cannot delete admin')
             history.push('/admin')
         }
         else{
        const url = 'http://localhost:8080'

    axios.delete(url + "/deletecustomer/"+item.email ).then((response) => {
            
        const result = response.data
        if (result.status === 'success') {
            history.push('/admin')

        }
        else {

            alert('error occured while getting details')

        }
    })}}
    return (
        <div><center>
            <h1>Are You Sure To Delete {item.fname} {item.lname} ?</h1>
            <button className="btn btn-success margin" onClick={deletecustomer} >Delete </button> 
            <button className="btn btn-warning margin" onClick={()=>{history.push('/admin')}}>Back </button> 
            </center>
        </div>
    )
}

export default DeleteCustomer
