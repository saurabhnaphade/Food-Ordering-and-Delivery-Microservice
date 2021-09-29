import '../../Product/snacks.css'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link,useHistory ,useLocation } from 'react-router-dom';
import { AiFillCodeSandboxCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from '../../actions/cartActions'
import { increment,decrement } from '../../actions/counterAction'
import Header1 from '../../Header/Header1';
import { CartProvider, useCart } from "react-use-cart";
import './Snackslist.css'

const Snackslist = () => {

    const { addItem } = useCart();

    const [allSnacks, setAllSnacks] = useState([])
    

    const history =useHistory()

    const location =useLocation()
    const menu = location.state.restaurant

    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.cartItems)

    const addToCart = (product) => {
    // call the API to add the product to the cart
    dispatch(addToCartAction(product))
    alert('Product added to cart succesfully')
  }
    

    useEffect(() => {
        getSnacksDetails()
    }
        , [])
    const getSnacksDetails = () => {
        const url = 'http://localhost:8888/restaurant-service'
        axios.get(url + "/fooditems/"+menu.name).then((response) => {
            console.log(response)
            console.log(response.data)
            console.log(response.data.status)
            const result = response.data
            
            if (result.status === 'success') {
                setAllSnacks(result.data)
                localStorage.setItem("hotel",menu.name)

            }
            else {

                alert('error occured while getting details')

            }
        })
    } 
    
    

    const counter = useSelector((state) => state.counter)

    const onIncrement = () => {
        dispatch(increment())
      }
    
      const onDecrement = () => {
        dispatch(decrement())
      }

    

    return (
        <div >
            <Header1/>
            
            <div className="block">
                <h2 >Best Snacks in {menu.name}</h2>
                <div className="snacks columnstyle">
                <button className="btn btn-warning margin" onClick={()=>
                                {history.push('/customerhome') }} >Back</button>

                    {allSnacks.map((product) => {

                        const foodItem = {
                            id : product._id,
                            name : product.name,
                            price : product.priceperunit,
                            description : product.description,
                            hotelname : menu.name,
                            img : product.food_thumbnail
                        }

                        return (
                        <div className="mystyle">
                            <img className="yourStyle" height="250px" src={'http://localhost:8300' + '/' + product.food_thumbnail}></img>
                            <center>
                            <div className="divNameStyle">
                                <div ><h3>{product.name}</h3></div>
                            </div>
                            
                            <div className="divStyle">
                                <h6 >Price : {product.priceperunit} Rs/-</h6>
                                <h6 >Description : {product.description} </h6>
                                <button className="btn btn-primary margin" onClick={()=>
                                {addItem(foodItem)}} >Add to cart</button>  
                            </div>
                            </center>
                        </div>
                        )
                    })}
                </div>
            </div>

            )
        </div>
    )
                    
    
}



export default Snackslist





