import { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../UserContext/UserContext';
import { emailvalidator } from '../Constants/constant';
import Header from '../Header/Header';
import './SignIn.css'



const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const {value, setValue} =useContext(UserContext)

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

    //   const data = new FormData()


    //   data.append('email', email);
    //   data.append('password', password);

    const data = {
        email : email,
        password : password
    }

      console.log(data)
      const url = 'http://localhost:8300'



      axios.post(url + '/auth/signin', data).then((response) => {

        
           setValue(response.data)
        const result = response.data
        console.log(response.data.data)

        const name = response.data.data.map((hotel) => {
          return hotel.name
        })

        console.log(name)

        localStorage.setItem("hotel",name)
        console.log(localStorage.getItem("hotel"))
        if (result.status === 'success') {
          alert('Login Succesfull')
          
          history.push('/hotelhome')
          

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
        <h1>Hotel SignIn</h1>
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
        </div>
      </div>
    </div>
  )
}

export default SignIn
