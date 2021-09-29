import './Restaurant.css'
import { Link,useHistory, useLocation } from 'react-router-dom';
import axios from 'axios'

const Hotel = ({items, title} ) =>{
 
    const history =useHistory()

    
    return(
        <div className="container">
            <div><h2>{title}</h2></div>
            <hr />
            <table className="table table-striped table-responsive">
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Zipcode</th>
                    <th>Mobile</th>
                    <th>Image</th>
                    <th>Rating</th>
                    <th>Action</th>
                </thead>
                <tbody>
            {
                items.map((item)=>{
                    return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.zipcode}</td>
                            <td>{item.phone}</td>
                            <td ><img className="thumbnail" src={'http://localhost:8300' + '/' + item.restaurant_thumbnail} /></td>
                            <td>{item.restaurant_rating}</td>
                            <button className="btn btn-success margin" onClick={()=>{history.push('/updaterestaurant',{item : item})}}>Update </button> 
                            <button className="btn btn-danger" onClick={()=>{history.push('/deleterestaurant',{item : item})}}>Delete</button>
                            <button className="btn btn-success margin" onClick={()=>
                                {history.push('/addfood' , {item : item}) }} >Add Food</button>
                        </tr>    
                        
                    )
                })
                
            }
            </tbody>
            </table>
        </div>


    )
}

export default Hotel
