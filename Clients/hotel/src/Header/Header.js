import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

          <Link className="nav-link" to="/signin"><a class="navbar-brand" href="localhost:3000/signin">Ravenous</a></Link>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" to="/">Restaurant Sign In</Link>
              </li>

              <li class="nav-item">
                <Link className="nav-link" to="/deliverysignin">Delivery Boy SignIn</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Header
