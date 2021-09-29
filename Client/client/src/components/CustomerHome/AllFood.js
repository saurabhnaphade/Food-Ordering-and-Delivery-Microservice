import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../Product/snacks.css'
import Header1 from '../../Header/Header1'
import UserContext from '../../Session/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from '../../actions/cartActions'
import './CustomerHome.css'
import { CartProvider, useCart } from "react-use-cart";

const AllFood = () => {
    const [allFood, setAllFood] = useState([])

    const { addItem } = useCart();

    const { value, setValue } = useContext(UserContext)

    const history = useHistory()

    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.cartItems)

    const addToCart = (product) => {
    // call the API to add the product to the cart
    dispatch(addToCartAction(product))
    alert('Product added to cart succesfully')
  }


    useEffect(() => {
        getRestaurantDetails()
    }
        , [])
    const getRestaurantDetails = () => {




        const url = 'http://localhost:8300'
        axios.get(url + '/getallrestaurantinfowithfooditems').then((response) => {

            const result = response.data
            if (result.status === 'success') {
                setAllFood(result.data)

            }
            else {

                alert('error occured while getting details')

            }
        })
    }
    return (
        <div >
            <Header1 />
            <div className="back">
                <h1>Welcome {value.data.fname} {value.data.lname} to Ravenous</h1>
                <h2 >All Snacks</h2>
                <div className="snacks">
                    <button className="btn btn-warning margin" onClick={() => { history.push('/signin') }} >Back</button>

                    {allFood.map((restaurant) => {

                        const restaurantname = restaurant.name;

                        return (
                            <div className="">
                                
                                <div className="divNameStyle">
                                    <div ><h3>A Food From Hotel {restaurant.name}</h3></div>
                                </div>
                                <div className="divStyle">
                                    {restaurant.fooditems.map((product) => {

                                                const foodItem = {
                                                    id : product._id,
                                                    name : product.name,
                                                    price : product.priceperunit,
                                                    description : product.description,
                                                    hotelname : restaurantname,
                                                    img : product.food_thumbnail
                                                }

                                        return (
                                            <div className="divStyle">
                                                    <center>
                                                <img className="yourStyle" height="250px" src={'http://localhost:8300' + '/' + product.food_thumbnail}></img>
                                                <div className="divStyleon">
                                                <h6 >Dish: {product.name} </h6>
                                                <h6 >Price : {product.priceperunit} Rs/-</h6>
                                                    <h6 >Rating : {product.food_rating} </h6>
                                                    <h6 >Description : {product.description} </h6>
                                                    <button className="btn btn-primary margin" onClick={()=>
                                {history.push('/snackslist',{restaurant : restaurant})}} >Add to cart</button>  
                                
                                                    <h1><hr/></h1>
                                                </div>
                                                </center>
                                            </div>
                                        )
                                    })}

                                   
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

export default AllFood
