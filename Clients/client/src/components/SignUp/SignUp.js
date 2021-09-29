import axios from 'axios';
import { useState} from 'react'
import './SignUp.css'
import { Link,useHistory } from 'react-router-dom';
import Header from '../../Header/Header';


const Signup = () => {
  // define the state
  const [fname, setFirstName] = useState('')
  const [lname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [zipcode, setZipcode] = useState(0)
  const [security, setSecurity] = useState('')
  
  const history  = useHistory();

  const signupUser = () => {
    console.log(`first name = ${fname}`)
    console.log(`last name = ${lname}`)
    console.log(`phone = ${phone}`)
    console.log(`email = ${email}`)
    console.log(`password = ${password}`)
    console.log(`address = ${address}`)
    console.log(`security = ${security}`)

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
  else if (security.length===0){
    alert('Enter Favourate Food')
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
      console.log(security)

      data.append('fname',fname)
      data.append('lname',lname);
      data.append('phone',phone);
      data.append('email',email);
      data.append('password',password);
      data.append('address',address);
      data.append('zipcode',zipcode);
      data.append('security',security);
      console.log(data)
      const url = 'http://localhost:8080'

      
      axios.post(url+'/auth/signup',data).then((response)=>{
        
          const result = response.data
          
          
          if(result.status === 'success'){
              alert('SignUp Sucessfull')
             
              history.push('/signin')

          }
          else{
              alert('Error While Adding Data')
          }
      })
  }
}

  

  return (
      <div className="style">
        <Header/>
      <div className="container">
      <h1>Signup</h1>
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
        <div className="mb-3">
        <label>Security</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setSecurity(event.target.value)
          }}
          className="form-control"
          type="text"
          placeholder="Enter Security Answer"
        />
        </div>
      </div>
      <div className="mb-3">
        <button onClick={signupUser} className="btn btn-success">
          Signup 
        </button> <Link className="nav-link" to ="/signin">already have an account</Link>
       
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Signup