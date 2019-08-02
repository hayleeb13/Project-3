import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/index.js";

function Signup() {
  return (
    <section className="hero is-fullheight is-bold">
      <Nav/>

      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-white">Please Sign Up</h3>
            <div className="box">
              <form>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="username"
                      placeholder="Username"
                      autofocus
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <Link to="/Login">
                <button className="button is-block is-info is-large is-fullwidth">
                  Create Profile
                </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;