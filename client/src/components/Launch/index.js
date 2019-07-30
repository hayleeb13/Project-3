import React from "react";
import "../Launch/style.css";
import { Link } from "react-router-dom";

function Launch() {
  return (
    <section className="hero is-fullheight is-bold">
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
               
                <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-end">
                    <div className="tabs is-right">
                        <ul>
                        <li className="is-active"><Link to="/Launch">Home</Link></li>
                        <li className="is-active"><Link to="/Survey">Survey</Link></li>
                        <li className="is-active"><Link to="/Login">Log In</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </nav>
        </div>
        <div className="hero-body">
            <div className="container">
                <div class="columns is-gapless">
                    <div class="column"></div>
                    <div class="column is-6">
                        <h1 class="title">
                            <img src="http://xfittrainingeastbay.com/wp-content/uploads/Expiration-Date-1.png"></img>
                        </h1>
                    </div>
                    <div class="column">
                        <h1 class="subtitle">
                            <br></br>
                            <br></br>
                            Find out how much time you have left!
                        </h1>
                        <br></br>
                        <p className="has-text-centered">
                            <div className="startSurvey button">
                                <Link to="/Survey">Start the Survey!</Link>
                            </div>
                        </p>
                    </div>
                    <div class="column"></div>    
                </div>
            </div>
        </div>
    </section>
  );
}

export default Launch;