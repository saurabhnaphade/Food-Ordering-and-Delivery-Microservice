
import { useState } from 'react'
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../Header/Header';

const ChangePassword = () => {
  // define the state
  
  const [email, setEmail] = useState('')
  const [security, setSecurity] = useState('')
  const [password, setPassword] = useState('')
  
  const history =useHistory();

  const changepassword = () => {
    
    console.log(`email = ${email}`)
    console.log(`security = ${security}}`)
    console.log(`password = ${password}`)


    if (email.length===0){
      alert('Enter You Email')
    }
    else if (security.length===0){
      alert('Enter Security Answer')
    }
    else if(password.length===0){
    alert('Enter New Password')
    }
    else{
      const data = new FormData()

      console.log(email)
      console.log(password)
      console.log(security)

      data.append('email',email);
      data.append('password',password);

      
      data.append('security',security);
      console.log(data)
      const url = 'http://localhost:8080'

      
      axios.post(url+'/auth/changepassword',data).then((response)=>{
        
          const result = response.data
          
          
          if(result.status === 'success'){
              alert('Password Updated Sucessfully')
             
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
      <h1>Change Your Password</h1>
      <div className="image">
      <div className="mb-3">
     
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
        <label>Security</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setSecurity(event.target.value)
          }}
          className="form-control"
          type="password"
          placeholder="Enter Security Answer"
        />
      <div className="mb-3">
        <label>New Password</label>
        <input
          onChange={(event) => {
            // updating the state with user entered value
            setPassword(event.target.value)
          }}
          className="form-control"
          type="password"
          placeholder="Enter New Password"
        />
      </div>
      <div className="mb-3">
        <button onClick={changepassword} className="btn btn-success">
          Confirm 
        </button> <Link className="nav-link" to ="/signin">Back</Link>
       
      </div>
    </div>
    </div>
    </div>
    </div>
      </div>
    
  )
}

export default ChangePassword