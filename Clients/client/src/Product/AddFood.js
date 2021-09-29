
import React from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react'
import { Link,useHistory ,useLocation } from 'react-router-dom';
import HeaderAdmin from '../Header/HeaderAdmin';





const AddFood = () => {
   
    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [priceperunit, setPriceperunit] = useState('')
    const [food_thumbnail, setFoodthumbnail] = useState('')
    const [food_rating, setFoodrating] = useState('')
    const [description, setDescription] = useState('')


    const history = useHistory();

    const location = useLocation()

    const item = location.state.item


    useEffect(() => {
        addfood()
    }
        , [])

    const addfood = () => {
        console.log(`category = ${category}`)
        console.log(`name = ${name}`)
        console.log(`priceperunit = ${priceperunit}`)
        console.log(`food_thumbnail = ${food_thumbnail}`)
        console.log(`food_rating = ${food_rating}`)
        console.log(`description = ${description}`)
        console.log(item.name)
        










            const data = new FormData()


            data.append('category', category)
            data.append('name', name);
            data.append('priceperunit', priceperunit);
            data.append('food_thumbnail', food_thumbnail);
            data.append('food_rating', food_rating);
            data.append('description', description);


            console.log(data)
            const url = 'http://localhost:8300'


            axios.put(url + "/addfooditem/"+item.name, data).then((response) => {

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
    

    return (
        <div>
            
            <div className="restaurantstyle">
                <h1>Add Food in {item.name}</h1>
                <div className="size">
                    <div className="mb-3">
                        <label>Category</label>
                        <input
                            onChange={(event) => {
                                // updating the state with user entered value
                                setCategory(event.target.value)
                            }}
                            className="form-control"
                            type="text"
                            placeholder="Enter Food Category"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            onChange={(event) => {
                                // updating the state with user entered value
                                setName(event.target.value)
                            }}
                            className="form-control"
                            type="text"
                            placeholder="Enter Food Name"
                        />
                    </div>
                    <div className="mb-3">
                        <label>PricePerUnit</label>
                        <input
                            onChange={(event) => {
                                // updating the state with user entered value
                                setPriceperunit(event.target.value)
                            }}
                            className="form-control"
                            type="text"
                            placeholder="Enter Restaurant Name"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Food Image</label>
                        <input
                            onChange={(event) => {
                                // updating the state with user entered value
                                setFoodthumbnail(event.target.files[0])
                            }}
                            className="form-control"
                            type="file"
                            placeholder="Enter Restaurant Name"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Food Rating</label>
                        <input
                            onChange={(event) => {
                                // updating the state with user entered value
                                setFoodrating(event.target.value)
                            }}
                            className="form-control" min="0"  max="5"  
                            type="Number"
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
                            placeholder="Enter Restaurant Name"
                        />
                        <button onClick={addfood} className="btn btn-success">Add</button>
                        <button className="btn btn-warning margin" onClick={()=>
                                {history.push('/restaurant') }} >Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFood
