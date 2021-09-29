import React from 'react'
import axios from 'axios';
import { useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import HeaderAdmin from '../Header/HeaderAdmin';



const UpdateRestaurant = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [zipcode, setZipcode] = useState(0)
    const [restaurant_thumbnail, setRestaurant] = useState()
    const [restaurant_rating, setRestaurantRating] = useState('')

    const history = useHistory();
    const location = useLocation()
    const item = location.state.item

    const updaterestaurant = () => {
        console.log(`name = ${name}`)
        console.log(`description = ${description}`)
        console.log(`phone = ${phone}`)
        console.log(`email = ${email}`)
        console.log(`address = ${address}`)
        console.log(`zipcode = ${zipcode}`)
        console.log(`restaurant_thumbnail = ${restaurant_thumbnail}`)
        console.log(`restaurant_rating = ${restaurant_rating}`)
        
        if (name.length === 0) {
            alert('Enter First Name')

        }

        if (description.length === 0) {
            alert('Enter Last Name')
        }
        else if (phone.length === 0) {
            alert('Enter mobile')
        }
        else if (email.length === 0) {
            alert('Enter email ')
        }
        
        else if (address.length === 0) {
            alert('Enter Address')
        }
        else if (zipcode === 0) {
            alert('Enter Zipcode')
        }
        else if (restaurant_thumbnail.length === 0) {
            alert('Enter Image')
        }
        else {
            const data = new FormData()
            console.log(data)
            console.log(name)
            console.log(description)
            console.log(phone)
            console.log(email)
            console.log(address)
            console.log(zipcode)
            console.log(restaurant_thumbnail)
            console.log(restaurant_rating)

            data.append('name', name)
            data.append('description', description);
            data.append('phone', phone);
            data.append('email', email);
            data.append('address', address);
            data.append('zipcode', zipcode);
            data.append('restaurant_thumbnail', restaurant_thumbnail);
            data.append('restaurant_rating', restaurant_rating);
            console.log(data)
            const url = 'http://localhost:8300'


            axios.put(url + '/updaterestaurant/'+item.name, data).then((response) => {

                const result = response.data


                if (result.status === 'success') {
                    alert('Restaurant Added Sucessfully')

                    history.push('/restaurant')

                }
                else {
                    alert('Error While Adding Data')
                }
            })
        }
    }
    return (
        <div>
            
            <div className="restaurantstyle">
                <h1>Update Restaurant {item.name}</h1>
                <div className="size">
                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            onChange={(event) => {
                                // updating the state with user entered value
                                setName(event.target.value)
                            }}
                            className="form-control"
                            type="text"
                            placeholder="Enter Restaurant Name"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Description</label>
                        <input
                            onChange={(event) => {
                                // updating the state with user entered value
                                setDescription(event.target.value)
                            }}
                            className="form-control"
                            type="text"
                            placeholder="Enter Restaurant Description"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Mobile</label>
                        <input
                            onChange={(event) => {
                                // updating the state with user entered value
                                setPhone(event.target.value)
                            }}
                            className="form-control"
                            type="text"
                            placeholder="Enter Restautant Mobile Number"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            onChange={(event) => {
                                // updating the state with user entered value
                                setEmail(event.target.value)
                            }}
                            className="form-control"
                            type="email"
                            placeholder="Enter Restaurant Email"
                        />
                    </div>
                   
                    <div className="mb-3">
                        <label>Address</label>
                        <input
                            onChange={(event) => {
                                // updating the state with user entered value
                                setAddress(event.target.value)
                            }}
                            className="form-control"
                            type="text"
                            placeholder="Enter Restaurant Address"
                        />
                        <div className="mb-3">
                            <label>Zipcode</label>
                            <input
                                onChange={(event) => {
                                    // updating the state with user entered value
                                    setZipcode(event.target.value)
                                }}
                                className="form-control"
                                type="number"
                                placeholder="Enter Restaurant Zipcode"
                            />
                            <div className="mb-3">
                                <label>Restaurant Image</label>
                                <input
                                    onChange={(event) => {
                                        // updating the state with user entered value
                                        setRestaurant(event.target.files[0])
                                    }}
                                    className="form-control"
                                    type="file" 
                                    placeholder="Enter Restaurant Image"
                                />
                            </div>
                            <div className="mb-3">
                                <label>Rating</label>
                                <input
                                    onChange={(event) => {
                                        // updating the state with user entered value
                                        setRestaurantRating(event.target.value)
                                    }}
                                    className="form-control"
                                    type="number" max="5" min="0"
                                    placeholder="Enter Restaurant Image"
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <button onClick={updaterestaurant} className="btn btn-success">
                                Update
                            </button> 
                            <button onClick={()=>{history.push('/restaurant')}} className="btn btn-warning">
                                Back
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateRestaurant
