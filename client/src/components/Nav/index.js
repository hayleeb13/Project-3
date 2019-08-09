import React from "react";
import "../Results/style.css";
import { Link } from "react-router-dom";

function Nav() {
  return(
<div className="hero-head">
<nav style={{zIndex:10}} className="navbar">
    <div className="container">
    <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
        <div className="tabs is-right">
            <ul>
            <li className="is-active"><Link to="/">Home</Link></li>
            <li className="is-active"><Link to="/Signup">Sign Up</Link></li>
            <li className="is-active"><Link to="/Login">Log In</Link></li>
            </ul>
        </div>
        </div>
    </div>
    </div>
</nav>
</div>
  );
}

export default Nav;