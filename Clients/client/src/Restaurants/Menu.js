import './Restaurant.css'
import { Link,useHistory, useLocation } from 'react-router-dom';

const Menu = ({items, title} ) =>{
 
    const history = useHistory()

    // const location = useLocation()
    // const item = location.state.items
    
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
                </thead>
                <tbody>
            {
                items.map((menu)=>{
                    return(
                        <tr>
                            <td>{menu.name}</td>
                            <td>{menu.email}</td>
                            <td>{menu.address}</td>
                            <td>{menu.zipcode}</td>
                            <td>{menu.phone}</td>
                            <td ><img className="thumbnail" src={'http://localhost:8300' + '/' + menu.restaurant_thumbnail} /></td>
                            <td>{menu.restaurant_rating}</td>
                            <button className="btn btn-success margin" onClick={()=>
                                {history.push('/snacks' , {menu : menu}) }} >Display Menu</button>
                        </tr>    
                        
                    )
                })
                
            }
            </tbody>
            </table>
        </div>


    )
}

export default Menu
