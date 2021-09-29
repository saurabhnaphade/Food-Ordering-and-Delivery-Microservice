
import React from 'react'
import HeaderAdmin from '../Header/HeaderAdmin'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Hotel from './Hotel'
import { Link } from 'react-router-dom'
import './Restaurant.css'
import Restaurantmenu from './Restaurantmenu'


const Restaurant = () => {
    const [allRestaurant, setAllRestaurant] = useState([])

    useEffect(() => {
        getRestaurantDetails()
    }
        , [])
    const getRestaurantDetails = () => {




        const url = 'http://localhost:8300'
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
                <h2><center>All Restaurant Details</center></h2>
                <div>
                    <center><a href="/addRestaurant"><button className="btn btn-success">Add Restaurant</button></a></center>
                    <Hotel items={allRestaurant}  ></Hotel>
                    
                </div>
            </div>
        </div>
    )
}

export default Restaurant
