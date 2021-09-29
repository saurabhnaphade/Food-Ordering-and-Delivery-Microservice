
import React from 'react'
import HeaderAdmin from '../Header/HeaderAdmin'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Hotel from './Hotel'
import { Link } from 'react-router-dom'
import './Restaurant.css'
import Menu from './Menu'



const Restaurantmenu = () => {
    const [allRestaurant, setAllRestaurant] = useState([])

    useEffect(() => {
        getRestaurantDetails()
    }
        , [])
    const getRestaurantDetails = () => {




        const url = 'http://localhost:8888/restaurant-service'
        axios.get(url + '/restaurants').then((response) => {

            const result = response.data
            if (result.status === 'success') {
                setAllRestaurant(result.data)

            }
            else {

                alert('error occured while getting details')

            }
        })
    }

    return (
        <div className="adminstyle">
            <HeaderAdmin />
            <div className="">
                <h2><center>All Restaurant Food Details</center></h2>
                <div>
                   
                    <Menu items={allRestaurant}  ></Menu>
                    
                </div>
            </div>
        </div>
    )
}
    

export default Restaurantmenu

