import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import '../../Product/snacks.css'
import Header1 from '../../Header/Header1'
import UserContext from '../../Session/UserContext'


const CustomerHome = () => {
    const [allRestaurant, setAllRestaurant] = useState([])

    const {value,setValue} = useContext(UserContext)

    const history = useHistory()

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
        <div >
            <Header1/>
            <div className="">
                <h1>Welcome {value.data.fname} {value.data.lname}</h1>
                <h2 >All Restaurant</h2>
                <div className="snacks">
                    <button className="btn btn-warning margin" onClick={() => { history.push('/signin') }} >Back</button>

                    {allRestaurant.map((restaurant) => {
                        return (
                            <div className="mystyle">
                                <img className="yourStyle" height="250px" src={'http://localhost:8300' + '/' + restaurant.restaurant_thumbnail}></img>
                                <div className="divNameStyle">
                                    <div ><h3>{restaurant.name}</h3></div>
                                </div>
                                <div className="divStyle">
                                    
                                    <h6 >Description : {restaurant.description} </h6>
                                    <h6 >Mobile : {restaurant.phone} </h6>
                                    <h6 >email : {restaurant.email} </h6>
                                    <h6 >address : {restaurant.address} </h6>
                                    <h6 >zipcode : {restaurant.zipcode} </h6>
                                    <h6 >Rating : {restaurant.restaurant_rating} </h6>
                                    
                                   <center> <button className="btn btn-success margin" onClick={() => { history.push('/snackslist', { restaurant: restaurant }) }} >Menu List</button></center>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            )
        </div>
    )
}

export default CustomerHome
