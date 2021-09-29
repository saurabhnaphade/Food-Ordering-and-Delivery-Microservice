import React from 'react'
import Header1 from '../Header/Header1'
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../UserContext/UserContext';
import { useContext, useState } from 'react';
const DeliveryHome = () => {

    const{value,setValue} = useContext(UserContext)

    return (
        <div>
            <Header1/>
            <h3>Welcome ......... {value.data.fname} {value.data.lname}</h3>
        </div>
    )
}

export default DeliveryHome
