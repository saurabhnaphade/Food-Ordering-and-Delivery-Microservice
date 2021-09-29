import React from 'react'
import UserContext from '../Session/UserContext'
import { useState, useContext,useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';

const Logout = () => {

   
    const history = useHistory();
    const {value,setValue} = useContext(UserContext)
    
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "http://localhost:3000"

        }, 3000)
      }, [])
      
    
    return (
        <div>
            <center>
            <h1>Thank You {value.data.fname} {value.data.lname} </h1>
            <h3>Visit Again..........</h3>
             <a href="/signin"><button className="btn btn-secondary" >Sign In Again</button></a>
            </center>
        </div>
    )
        setValue(null)
}


export default Logout
