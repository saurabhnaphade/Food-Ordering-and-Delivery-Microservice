import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios'

const Deletedeliveryboy = () => {

    const history = useHistory()

     const location = useLocation()
     const delivery = location.state.delivery
     const deletedeliveryboy = ()=>{

        const url = 'http://localhost:8200'

    axios.delete(url + "/delete/"+delivery.email ).then((response) => {
            
        const result = response.data
        if (result.status === 'success') {
            history.push('/deliveryboy')

        }
        else {

            alert('error occured while getting details')

        }
    })}
    return (
        <div><center>
            <h1>Are YOU Sure To Delete {delivery.fname} {delivery.lname} ?</h1>
            <button className="btn btn-success margin" onClick={deletedeliveryboy} >Delete </button> 
            <button className="btn btn-warning margin" onClick={()=>{history.push('/deliveryboy')}}>Back </button> 
            </center>
        </div>
    )
}

export default Deletedeliveryboy
