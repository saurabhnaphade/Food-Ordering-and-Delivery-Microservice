import axios from 'axios';
import { useState, useContext} from 'react'

import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../Session/UserContext';

const Editprofile = () => {
  // define the state
  const [fname, setFirstName] = useState('')
  const [lname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipcode] = useState(0)
  const [security, setSecurity] = useState('')

  const {value,setValue} =  useContext(UserContext)
  console.log(value.data)
  const history  = useHistory();

  
  
  const editUser = () => {
    console.log(`first name = ${fname}`)
    console.log(`last name = ${lname}`)
    console.log(`phone = ${phone}`)
    console.log(`email = ${value.data.email}`)
    console.log(`password = ${password}`)
    console.log(`address = ${address}`)
    console.log(`security = ${security}`)
    console.log(`zipcode = ${zipcode}`)

    

    if (fname.length === 0) {
      alert('Enter First Name')
   }
 
  if (lname.length===0) {
      alert('Enter Last Name')
  }
  else if (phone.length===0){
      alert('Enter mobile')
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
  else if (security.length===0){
    alert('Enter Favourate Food')
}
  else{
      const data = new FormData()
      console.log(data)
      console.log(fname)
      console.log(lname)
      console.log(phone)
      console.log(value.data.email)
      console.log(password)
      console.log(address)
      console.log(zipcode)
      console.log(security)

      data.append('fname',fname)
      data.append('lname',lname);
      data.append('phone',phone);
      data.append('email',value.data.email);
      data.append('password',password);
      data.append('address',address);
      data.append('zipcode',zipcode);
      data.append('security',security);
      console.log(data)
      const url = 'http://localhost:8080'

      
      axios.post(url+'/auth/edit',data).then((response)=>{
        
          const result = response.data
          
          
          if(result.status === 'success'){
              alert('Profile Updated Successfully')
             
              history.push('/logout')

          }
          else{
              alert('Error While Adding Data')
          }
      })
  }
  }

  return (
      <div className="style">
      <div className="container">
      <h1>Edit Profile</h1>
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
          placeholder=""
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
        />
      </div>
      <div className="mb-3">
        <label>Security</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setSecurity(event.target.value)
          }}
          className="form-control"
          type="text"
        />
      </div>
      <div className="mb-3">
        <button onClick={editUser} className="btn btn-success">
          Edit 
        </button> <Link className="nav-link" to ="/customerhome">Back</Link>
       
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Editprofile