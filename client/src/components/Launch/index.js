import React from "react";
import "../Launch/style.css";
import { Link } from "react-router-dom";
import Nav from "../Nav/index.js"

function Launch() {
return (
    <section className="hero is-fullheight is-bold">
        <Nav/>
        <div className="hero-body">
            <div className="container">
                <div className="columns is-gapless">
                    <div className="column"></div>
                    <div className="column is-6">
                        <h1 className="title">
                            <img src="http://xfittrainingeastbay.com/wp-content/uploads/Expiration-Date-1.png" alt="expiration-date"></img>
                        </h1>
                    </div>
                    <div className="column">
                        <h1 className="subtitle">
                            <br></br>
                            <br></br>
                            Find out how much time you have left!
                        </h1>
                        <br></br>
                        <div className="has-text-centered">
                        <Link to="/Signup">
                            <div className="signup button">
                                Sign Up
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="column"></div>    
                </div>
            </div>
        </div>
    </section>
);
}

export default Launch;