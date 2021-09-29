import { useDispatch, useSelector } from 'react-redux'
import { removeFromCartAction,removeAllFromCartAction } from '../../actions/cartActions'
import { useHistory} from 'react-router-dom';
import { decrement,increment } from '../../actions/counterAction'
import axios from 'axios'
import './MyCart.css'
import { useState, useEffect } from 'react'
import {  useContext } from 'react'
import { CartProvider, useCart } from "react-use-cart";
import UserContext from '../../Session/UserContext'



const MyCart = () => {
     const [count, setcount] = useState(0)
     const cartItems = useSelector((state) => state.cartItems)
     const counter = useSelector((state) => state.counter)
     const dispatch = useDispatch()
     const history = useHistory() 
     const {value , setValue} = useContext(UserContext)
     
     const {
      isEmpty,
      totalUniqueItems,
      items,
      totalItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart
    } = useCart();
  
    if (isEmpty) return <center><h1>Your Cart is Empty</h1></center>;
  


      const removeFromCart = (product) => {
     dispatch(removeFromCartAction(product))
    }

    

    console.log(items)

    const addorder = () => {

      const cname = value.data.fname + " " +value.data.lname

      const caddress = value.data.address + " " + value.data.zipcode

      console.log(items)

      const fooditems = items.map((item) => {

        return{
          menuname : item.name,
          quantity : item.quantity,
          priceperunit : item.price
        }

      })

      const sentOrderDetails = (order) => {

        history.push("./payment", {order : order})

      }
  

      console.log( "fooditems",fooditems)

      console.log("cname",cname)
    
        

        const data = {
          custname : cname,
          restaurantname : localStorage.getItem("hotel"),
          cust_address : caddress,
          total_price : cartTotal,
          totalitems : totalUniqueItems,
          status : "Fowarded To Restaurant",
          fooditems : fooditems
          
        }

       
        console.log(data)
        const url = 'http://localhost:8500'
  
        
        axios.post(url+'/placeorder',data).then((response)=>{
          
            const result = response.data
            
            
            if(result.status === 'success'){
                alert('Order Placed Successfully')
                emptyCart()
                sentOrderDetails(result.data)
               
                
  
            }
            else{
                alert('Error While Adding Data')
            }
        })
    }
  
    const onIncrement = (cartItems) => {
      dispatch(increment(cartItems))
    }
  
    const onDecrement = () => {
      dispatch(decrement())
    }
    

    return (
    <div>
      <h1>My Cart</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Restaurant</th>
            <th>Name</th>
            <th>Price Per Unit</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product,index) => {
            
            
            return (
              <tr>
                <td><img className="yourStyle" height="70px" src={'http://localhost:8300' + '/' + product.img}></img></td>
                <td>{localStorage.getItem("hotel")}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td><button className="btn btn-success button" onClick={()=>{updateItemQuantity(product.id, product.quantity+1)}}>+</button>{product.quantity}
                 <button className="btn btn-warning button" onClick={()=>{updateItemQuantity(product.id, product.quantity-1)}} min="0">-</button></td>
                <td>{product.quantity*product.price}</td>
                <td>
                <button onClick={()=>{removeItem(product.id)}} className="btn btn-warning">&times;</button>
                   
                </td>
              </tr>
            )
          })}
          <tr>
            <td>
            Total Amount
            </td>
            <td>
             {cartTotal}
            </td>
          </tr>
          
        </tbody>
      </table>
      <center><button className="btn btn-success" onClick={addorder}>Checkout</button></center>
      <center><button className="btn btn-warning" onClick =  {emptyCart} >Clear Cart</button></center>
      <center><button className="btn btn-warning" onClick={()=>{history.push('/customerhome')}}>Back</button></center>
    </div>
  )
}








































































export default MyCart
