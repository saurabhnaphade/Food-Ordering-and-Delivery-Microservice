import React from 'react'
import { Link,useHistory ,useLocation } from 'react-router-dom';


const DeliveryOrderDetails = () => {

    
    const location = useLocation()
    const item = location.state.item

    const history = useHistory()

    return (

        <div className="container">
        <div><h2>Order Details</h2></div>
        <hr />
        <table className="table table-striped table-responsive">
            <thead>
                <th>menuname</th>
                <th>quantity</th>
                <th>priceperunit</th>
              
            </thead>
            <tbody>
        {
            item.map((fooditem)=>{
                return(
                    <tr>
                        <td>{fooditem.menuname} </td>
                        <td>{fooditem.quantity}</td>
                        <td>{fooditem.priceperunit}</td>
                  
                       
                    </tr>    
                    
                )
            })
            
        }
        </tbody>
        </table>
        <center> <button className="btn btn-warning" onClick={()=>{history.push('/deliveryhistory')}}>Back</button></center>
    </div>
       
    )
}

export default DeliveryOrderDetails


