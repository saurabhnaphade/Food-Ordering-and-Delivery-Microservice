import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios'

const DeleteRestaurant = () => {

    const history = useHistory()

     const location = useLocation()
     const item = location.state.item
     const deleterestaurant = ()=>{

        const url = 'http://localhost:8300'

    axios.delete(url + "/deleterestaurant/"+item.name ).then((response) => {
            
        const result = response.data
        if (result.status === 'success') {
            history.push('/restaurant')

        }
        else {

            alert('error occured while getting details')

        }
    })}
    return (
        <div>
            <h1>Are YOU Sure To Delete {item.name} ?</h1>
            <button className="btn btn-success margin" onClick={deleterestaurant} >Delete </button> 
            <button className="btn btn-warning margin" onClick={()=>{history.push('/menu')}}>Back </button> 
        </div>
    )
}

export default DeleteRestaurant
