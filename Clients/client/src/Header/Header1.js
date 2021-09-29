import React, { useState, useContext } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import UserContext from '../Session/UserContext';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory} from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";



const Header1 = () => {
    const cartItems = useSelector((state) => state.cartItems)
    const history = useHistory()
    const {value,setValue} = useContext(UserContext)

    const {
        totalUniqueItems
    } = useCart();
    
    return (
        <div>
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" class="navbar navbar-expand-lg navbar-light bg-light">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Navbar.Brand  href="/signin">Ravenous</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="me-auto">
                            <ReactBootStrap.Nav.Link ><Link to="/allfood">Food</Link></ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link ><Link to="/customerhome">Restaurant</Link></ReactBootStrap.Nav.Link>
                            <ReactBootStrap.NavDropdown title={value.data.fname} id="collasible-nav-dropdown" bg="dark" variant="dark">
                                <ReactBootStrap.NavDropdown.Item ><Link to="/logout">Logout</Link></ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item ><Link to="/edit">Edit Profile</Link></ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Contact us</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Divider />
                                <ReactBootStrap.NavDropdown.Item ><Link to="/orderhistory">Order History</Link></ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.NavDropdown>
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>
                            <ReactBootStrap.Nav.Link href="#deets"></ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link eventKey={2}>
                            <button class="btn btn-primary" onClick={()=>{history.push('/mycart')}}>My Cart item : {totalUniqueItems}</button>
                            
                                
                            </ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default Header1
