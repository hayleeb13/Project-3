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
                <div class="columns is-gapless">
                    <div class="column"></div>
                    <div class="column is-6">
                        <h1 class="title">
                            <img src="http://xfittrainingeastbay.com/wp-content/uploads/Expiration-Date-1.png" alt="expiration-date"></img>
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