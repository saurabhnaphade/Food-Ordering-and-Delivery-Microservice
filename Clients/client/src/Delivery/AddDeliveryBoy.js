import axios from 'axios';
import { useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import HeaderAdmin from '../Header/HeaderAdmin';


const AddDeliveryBoy = () => {
  // define the state
  const [fname, setFirstName] = useState('')
  const [lname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipcode] = useState(0)
  
  
  const history  = useHistory();

  const adddeliveryboy = () => {
    console.log(`first name = ${fname}`)
    console.log(`last name = ${lname}`)
    console.log(`phone = ${phone}`)
    console.log(`email = ${email}`)
    console.log(`password = ${password}`)
    console.log(`address = ${address}`)
    
    if (fname.length === 0) {
      alert('Enter First Name')
      
   }
 
  if (lname.length===0) {
      alert('Enter Last Name')
  }
  else if (phone.length===0){
      alert('Enter mobile')
  }
  else if (email.length===0){
      alert('Enter email ')
  }
  else if (password.length===0){
      alert('Enter password')
  }
  else if (address.length===0){
      alert('Enter Address')
  }
  else if (zipcode===0){
      alert('Enter Zipcode')
  } 
  else{
      const data = new FormData()
      console.log(data)
      console.log(fname)
      console.log(lname)
      console.log(phone)
      console.log(email)
      console.log(password)
      console.log(address)
      console.log(zipcode)
      

      data.append('fname',fname)
      data.append('lname',lname);
      data.append('phone',phone);
      data.append('email',email);
      data.append('password',password);
      data.append('address',address);
      data.append('zipcode',zipcode);
      
      console.log(data)
      const url = 'http://localhost:8200'

      
      axios.post(url+'/auth/signup',data).then((response)=>{
        
          const result = response.data
          
          
          if(result.status === 'success'){
              alert('SignUp Sucessfull')
             
              history.push('/deliveryboy')

          }
          else{
              alert('Error While Adding Data')
          }
      })
  }
}

  

  return (
      <div className="style">
        <HeaderAdmin/>
      <div className="container">
      <h1>Add Delivery Boy</h1>
      <div className="image">
      <div className="mb-3">
        <label>First Name</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setFirstName(event.target.value)
          }}
          className="form-control"
          type="text"
          placeholder="Enter Your First Name"
        />
      </div>
      <div className="mb-3">
        <label>Last Name</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setLastName(event.target.value)
          }}
          className="form-control"
          type="text"
          placeholder="Enter Your Last Name"
        />
      </div>
      <div className="mb-3">
        <label>Mobile</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setPhone(event.target.value)
          }}
          className="form-control"
          type="text"
          placeholder="Enter Your Mobile Number"
        />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setEmail(event.target.value)
          }}
          className="form-control"
          type="email"
          placeholder="Enter Your Email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setPassword(event.target.value)
          }}
          className="form-control"
          type="password"
          placeholder="Enter Your Password"
        />
      </div>
      <div className="mb-3">
        <label>Address</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setAddress(event.target.value)
          }}
          className="form-control"
          type="text"
          placeholder="Enter Your Address"
        />
        <div className="mb-3">
        <label>Zipcode</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setZipcode(event.target.value)
          }}
          className="form-control"
          type="number"
          placeholder="Enter Zipcode"
        />
        </div>
      </div>
      <div className="mb-3">
        <button onClick={adddeliveryboy} className="btn btn-success">
          Add
        </button> 
       
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default AddDeliveryBoy