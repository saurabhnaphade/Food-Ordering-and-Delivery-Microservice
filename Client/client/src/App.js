
import './App.css';
import Signin from './components/SignIn/Signin';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Signup from './components/SignUp/SignUp';
import editprofile from './components/EditProfile/editprofile';
import ChangePassword from './components/PasswordChange/ChangePassword';
import AdminHome from './components/AdminHome/AdminHome';
import CustomerHome from './components/CustomerHome/CustomerHome';
import Restaurant from './Restaurants/Restaurant';
import AddRestaurant from './Restaurants/AddRestaurant';
import { useState } from 'react';
import Logout from './Logout/Logout';
import Error from './Error/Error';
import AddFood from './Product/AddFood';
import Snack from './Product/Snack';
import Restaurantmenu from './Restaurants/Restaurantmenu';
import Deletemenu from './Product/Deletemenu';
import snackslist from './components/CustomerHome/Snackslist';
import Snackslist from './components/CustomerHome/Snackslist';
import UserContext from './Session/UserContext';
import DeleteRestaurant from './Restaurants/DeleteRestaurant';
import AddDeliveryBoy from './Delivery/AddDeliveryBoy';
import Deliveryboy from './Delivery/Deliveryboy';
import Deletedeliveryboy from './Delivery/Deletedeliveryboy';
import MyCart from './components/Cart/MyCart';
import { useDispatch, useSelector } from 'react-redux'
import Payment from './Payment/Payment';
import Order from './Order/Order';
import AllFood from './components/CustomerHome/AllFood';
import UpdateRestaurant from './Restaurants/UpdateRestaurant';
import DeleteCustomer from './components/CustomerHome/DeleteCustomer';
import Demo from './Demo/Demo';
import { CartProvider } from "react-use-cart";
import { OrderHistory } from './Order/OrderHistory';
import OrderDetails from './Order/OrderDetails';
import PaymentDetails from './Payment/PaymentDetails';

function App() {
  const [value, setValue] = useState('')

  const cartItems = useSelector(state => state.cartItems)
  return (
    
    <BrowserRouter>
      
     





      

      <Switch>
        <UserContext.Provider value={{value,setValue}}>
        <CartProvider>
        <Route exact path="/" component={Demo}></Route>
        <Route path="/customerhome" component={CustomerHome}></Route>
        <Route path="/admin" component={AdminHome}></Route>
        <Route path="/signin" component={Signin}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/edit" component={editprofile}></Route>
        <Route path="/Change" component={ChangePassword}></Route>
        <Route path="/restaurant" component={Restaurant}></Route>
        <Route path="/addRestaurant" component={AddRestaurant}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Route path="/addfood" component={AddFood}></Route>
        <Route path="/snacks" component={Snack}></Route>
        <Route path="/menu" component={Restaurantmenu}></Route>
        <Route path="/deletefood" component={Deletemenu}></Route>
        <Route path="/snackslist" component={Snackslist}></Route>
        <Route path="/deleterestaurant" component={DeleteRestaurant}></Route>
        <Route path="/deliveryboy" component={Deliveryboy}></Route>
        <Route path="/adddeliveryboy" component={AddDeliveryBoy}></Route>
        <Route path="/deletedeliveryboy" component={Deletedeliveryboy}></Route>
        <Route path="/mycart" component={MyCart}></Route>
        <Route path="/payment" component={Payment}></Route>
        <Route path="/order" component={Order}></Route>
        <Route path="/allfood" component={AllFood}></Route>
        <Route path="/updaterestaurant" component={UpdateRestaurant}></Route>
        <Route path="/deletecustomer" component={DeleteCustomer}></Route>
        <Route path="/demo" component={Demo}></Route>
        <Route path="/orderhistory" component={OrderHistory}></Route>
        <Route path="/orderdetails" component={OrderDetails}></Route>
        <Route path="/paymentdetails" component={PaymentDetails}></Route>
        </CartProvider>
        </UserContext.Provider> 
        <Route  component={Error}></Route>
        
      </Switch>

    </BrowserRouter>
    
  );}


export default App;
