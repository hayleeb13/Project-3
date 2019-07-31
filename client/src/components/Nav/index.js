import React from "react";
import "../Results/style.css";
import { Link } from "react-router-dom";

function Nav() {
  return(
<div className="hero-head">
<nav className="navbar">
    <div className="container">
    <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
        <div className="tabs is-right">
            <ul>
            <li className="is-active"><Link to="/">Home</Link></li>
<<<<<<< HEAD
            <li className="is-active"><Link to="/Survey">Survey</Link></li>
=======
            <li className="is-active"><Link to="/Signup">Sign Up</Link></li>
>>>>>>> 37c086108f602f025a9371d1c0b58146b55752bb
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