
import React from 'react'
import axios from 'axios'
import { Link,useHistory ,useLocation } from 'react-router-dom';

const Deletemenu = () => {
    const history = useHistory()

    const location = useLocation()
    const product  = location.state.product
    
    const deletesnacks = () => {
        console.log(`name = ${product.name}`)

        // const data = {
        //     name : product.name
        // }
        
        const data = new FormData()
        data.append('foodname', product.name);

        const url = 'http://localhost:8300'
        axios.delete(url + "/deletefooditems/"+localStorage.getItem("hotel") + '/' + product.name ).then((response) => {
            
            const result = response.data
            if (result.status === 'success') {
                history.push('/menu')

            }
            else {

                alert('error occured while getting details')

            }
        })
    } 
    return (
        <div>
            Are You Sure ?
            <button onClick={deletesnacks} className="btn btn-danger">Delete</button>
            <button onClick={()=>{history.push('./menu')}} className="btn btn-warning">Back</button>
        </div>
    )
}

export default Deletemenu

