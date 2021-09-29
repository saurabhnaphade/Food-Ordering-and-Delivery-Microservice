import './Signin.css'
import { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import {emailvalidator} from '../constants/constant.js'
import Header from '../../Header/Header';
import UserContext from '../../Session/UserContext';





const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const {value,setValue} =  useContext(UserContext)

  const history = useHistory();

  const signinUser = () => {

    if (email.length === 0) {
      alert('please enter email')
    } 
    else if(!emailvalidator.test(email)){
      alert('Enter email in corect pattern')
      return
    }
    else if (password.length === 0) {
      alert('please enter password')
     } 
    
    else {
      console.log(`email = ${email}`)
      console.log(`password = ${password}`)

      const data = new FormData()


      data.append('email', email);
      data.append('password', password);

      console.log(data)
      const url = 'http://localhost:8888/customer-service'



      axios.post(url + '/auth/signin', data).then((response) => {

        setValue(response.data)
          //localStorage.setItem("email",email)
        const result = response.data
        
        if (result.status === 'success') {
          alert('Login Succesfull')

          
          
          
          if (result.data.role == "admin") {
            history.push('/admin')
          }
          else {
            history.push('/customerhome')
          }

        }
        else {
          alert('Error While Adding Data')
          
        }
      })

    }
  }

  return (
    
    <div className="style">
      <Header/>
      <div className="container" className="image">
        <h1> SignIn</h1>
        <div className="style_email">
          <div className="mb-3">
            <label className="style_font">Email</label>
            <input
              onChange={(event) => {
                setEmail(event.target.value)
              }}
              placeholder="enter your email"
              className="form-control"
              type="email"
              

            />
          </div>
          <div className="mb-3">
            <label className="style_font">Password</label>
            <input
              onChange={(event) => {
                setPassword(event.target.value)
              }}
              placeholder="enter your password"
              className="form-control"
              type="password"
            />
          </div>
        </div>
        <div className="mb-3">
          <button onClick={signinUser} className="btn btn-success">
            Signin
          </button>
          <Link className="nav-link" to="/signup">don't have an account</Link>
          <Link className="nav-link" to="/change">forgot password ?</Link>
        </div>
      </div>
    </div>
  )
}

export default Signin
