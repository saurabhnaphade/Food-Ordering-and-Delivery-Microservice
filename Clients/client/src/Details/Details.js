import { useHistory} from 'react-router-dom';


const Details = ({items, title} ) =>{
 const history = useHistory()
    
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
                    <th>Role</th>
                    <th>Action</th>
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
                            <button className="btn btn-danger" onClick={()=>{history.push('/deletecustomer',{item : item})}}>Delete</button>
                        </tr>    
                        
                    )
                })
                
            }
            </tbody>
            </table>
        </div>


    )
}

export default Details