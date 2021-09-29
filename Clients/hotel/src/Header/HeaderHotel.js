
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
// import { useDispatch, useSelector } from 'react-redux'
import { useHistory} from 'react-router-dom';
import { useContext, useState } from 'react';
import UserContext from '../UserContext/UserContext';



const HeaderHotel = () => {
    
    const history = useHistory()
    
    const{value,setValue} = useContext(UserContext)
    
    
    return (
        <div>
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" class="navbar navbar-expand-lg navbar-light bg-light">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Navbar.Brand  href="/signin">Ravenous</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="me-auto">
                            <ReactBootStrap.Nav.Link ><Link to="/activeorder">Active Order</Link></ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link ><Link to="/history">Order History</Link></ReactBootStrap.Nav.Link>
                            <ReactBootStrap.NavDropdown title={value.data.email} id="collasible-nav-dropdown" bg="dark" variant="dark">
                                <ReactBootStrap.NavDropdown.Item ><Link to="/logouthotel">Logout</Link></ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item ><Link to="/edit">Edit Profile</Link></ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Contact us</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Divider />
                                <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.NavDropdown>
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>
                            <ReactBootStrap.Nav.Link href="#deets"></ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link eventKey={2}>
                            <button class="btn btn-primary" onClick={()=>{history.push('/logouthotel')}}>Logout... {value.data.email}</button>
                            
                                
                            </ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default HeaderHotel
