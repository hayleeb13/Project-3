import React from "react";
import "./style.css";

function Login() {
  return (
    <section className="hero is-fullheight is-default is-bold">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href>
                <img src="images/smiling-sun.jpg" alt="smiling-sun" />
              </a>
              <span className="navbar-burger burger" data-target="navbarMenu">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-end">
                <div className="tabs is-right">
                  <ul>
                    <li className="is-active">
                      <a>Home</a>
                    </li>
                    <li>
                      <a href>Survey</a>
                    </li>
                    <li>
                      <a href>Something</a>
                    </li>
                    <li>
                      <a href>Something</a>
                    </li>
                    <li>
                      <a href>Log In</a>
                    </li>
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
            <h3 className="title has-text-grey">Login</h3>
            <p className="subtitle has-text-grey">Please login to proceed.</p>
            <div className="box">
              <figure className="avatar">
                <img src="https://placehold.it/128x128" />
              </figure>
              <form>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="email"
                      placeholder="Your Email"
                      autofocus
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="password"
                      placeholder="Your Password"
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
              <a href="../">Sign Up</a> &nbsp;·&nbsp;
              <a href="../">Forgot Password</a> &nbsp;·&nbsp;
              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <div className="container">
          <div className="tabs is-centered">
            <ul>
              <li>
                <a>Project 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;