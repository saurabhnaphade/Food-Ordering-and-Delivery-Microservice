import React from 'react'
import Header2 from '../Header/HeaderHotel'
import { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../UserContext/UserContext';
import HeaderHotel from '../Header/HeaderHotel';


const HotelHome = () => {
    const{value,setValue} = useContext(UserContext)

    return (
        <div>
            <HeaderHotel/>
            Welcome to Ravenous ...... {value.data.name}
        </div>
    )
}

export default HotelHome
