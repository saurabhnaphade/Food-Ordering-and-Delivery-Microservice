import { useState, useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DeliveryHome from './Delivery/DeliveryHome';
import DeliverySignIn from './Delivery/DeliverySignIn';
import DeliveryActiveOrder from './DeliveryOrders/DeliveryActiveOrders';
import DeliveryOrderDetails from './DeliveryOrders/DeliveryOrderDetails';
import { DeliveryOrderHistory } from './DeliveryOrders/DeliveryOrderHistory';
import onDelivery from './DeliveryOrders/OnDelivery';
import Error from './Error/Error' ;
import HotelHome from './Hotel/HotelHome';
import SignIn from './Hotel/SignIn';
import Logout from './Logout/Logout';
import LogoutHotel from './Logout/LogoutHotel';
import ActiveOrder from './Orders/ActiveOrder';
import OrderDetails from './Orders/OrderDetails';
import { OrderHistory } from './Orders/OrderHistory';
import UserContext from './UserContext/UserContext';



function App() {

  const [value, setValue] = useState('')
  
  return (
    
    <BrowserRouter>
      
     





      
      
      <Switch>
        
      <UserContext.Provider value={{value,setValue}}>
        <Route exact path="/" component={SignIn}></Route>
        <Route path="/deliverysignin" component={DeliverySignIn}></Route>
        <Route path="/deliveryhome" component={DeliveryHome}></Route>
        <Route path="/hotelhome" component={HotelHome}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Route path="/logouthotel" component={LogoutHotel}></Route>
        <Route path="/activeorder" component={ActiveOrder}></Route>
        <Route path="/details" component={OrderDetails}></Route>
        <Route path="/history" component={OrderHistory}></Route>
        <Route path="/deliveryactiveorder" component={DeliveryActiveOrder}></Route>
        <Route path="/deliverydetails" component={DeliveryOrderDetails}></Route>
        <Route path="/deliveryhistory" component={DeliveryOrderHistory}></Route>
        <Route path="/ondelivery" component={onDelivery}></Route>
        </UserContext.Provider>
        
        <Route  component={Error}></Route>
        
      </Switch>

    </BrowserRouter>
    
  );}


export default App;
