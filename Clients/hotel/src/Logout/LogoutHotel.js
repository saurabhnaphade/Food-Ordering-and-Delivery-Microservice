import React from 'react'
import UserContext from '../UserContext/UserContext'
import { useState, useContext,useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';

const LogoutHotel = () => {

   
    const history = useHistory();
    const {value,setValue} = useContext(UserContext)
    
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "http://localhost:3001"

        }, 3000)
      }, [])
      
    
    return (
        <div>
            <center>
            <h1>Thank You {value.data.name}  </h1>
            <h3>Visit Again..........</h3>
             <a href="/"><button className="btn btn-secondary" >Sign In Again</button></a>
            </center>
        </div>
    )
        
}


export default LogoutHotel
