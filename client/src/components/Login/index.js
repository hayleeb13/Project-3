import React from "react";
import "../Login/style.css";
import { Link } from "react-router-dom";

function Login() {
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
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-white">Please login to proceed</h3>
            <div className="box">
              <form>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="email"
                      placeholder="Email"
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
                <div className="field">
                  <label className="checkbox">
                    <input type="checkbox" />
                    Remember me
                  </label>
                </div>
                <button className="button is-block is-info is-large is-fullwidth">
                  Login
                </button>
              </form>
            </div>
            <p className="has-text-grey">
              <Link to="/Survey">Sign Up</Link> &nbsp;·&nbsp;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;