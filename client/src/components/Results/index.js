import React from "react";
import "../Results/style.css";
import Nav from "../Nav/index.js";
import { Link } from "react-router-dom";
import expiration from "../Survey/index";

function Results() {

    return (
      <section className="hero is-fullheight is-default is-bold">
        <Nav />
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <div className="box has-text-centered">
                  <h4 className="title">
                    <strong>Years Left!</strong>
                  </h4>
                  <br />
                  <br />
                  <h2 style={{ color: "red" }}>
                    <strong>20{expiration}</strong>
                  </h2>
                  <br />
                  <br />
                </div>
              </div>
              <div className="column is-half">
                <div className="box has-text-centered">
                  <h1>
                    <strong>Want to increase your longevity?</strong>
                  </h1>
                  <br />
                  <br />
                  <div className="recipes button is-success">
                    Find healthy recipes
                  </div>
                  <br />
                  <br />
                  <div className="quitSmoke button is-info">
                    Find programs to help you quit smoking
                  </div>
                  <br />
                  <br />
                  <div className="gyms button is-warning">Find nearby gyms</div>
                </div>
              </div>
            </div>
            <div className="box is-fullwidth has-text-centered">
              <h1>
                <strong>
                  Now that you have your expiration, find your date!
                </strong>
              </h1>
              <div className="date button is-danger">Don't die alone</div>
              <br />
              <h1>
                <strong>Already found your other half?</strong>
              </h1>
              <Link to="/Survey">
                <div className="partner button is-danger">
                  Check your partner
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }


export default Results;