import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import UserContext from '../UserContext/UserContext';
import { emailvalidator } from '../Constants/constant';
import "./DeliveryHome.css"





const DeliverySignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const{value,setValue} = useContext(UserContext)

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
      const url = 'http://localhost:8200'



      axios.post(url + '/auth/signin', data).then((response) => {

       
          setValue(response.data)
        const result = response.data
        
        if (result.status === 'success') {
          alert('Login Succesfull')
            history.push('/deliveryhome')
            
        }
        else {
          alert('Error While Adding Data')
          
        }
      })

    }
  }

  return (
    
    <div className="styled">
      <Header/>
      <div className="container" className="imaged">
        <h1> SignIn</h1>
        <div className="style_emaild">
          <div className="mb-3">
            <label className="style_fontd">Email</label>
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
            <label className="style_fontd">Password</label>
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

export default DeliverySignIn
