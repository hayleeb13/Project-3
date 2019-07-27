import React from "react";
import "./style.css";

function Survey() {

  return(

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
                      <li className="is-active"><a>Home</a></li>
                      <li><a href>Survey</a></li>
                      <li><a href>Something</a></li>
                      <li><a href>Something</a></li>
                      <li><a href>Log In</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-5">
                <figure className="image is-4by3">
                  <img src="../../../public/assets/happy-trees.jpg" alt="calm-picture" />
                </figure>
              </div>
              <div className="column is-6 is-offset-1">
                <h1 className="title is-2">
                  Dying to Find Love
                </h1>
                <h2 className="subtitle is-4">
                  How many years do you have left on this world and do you really want to spend them alone?
                </h2>
                <br />
                <p className="has-text-centered">
                  <a className="button is-medium is-info is-outlined">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <div className="container">
            <div className="tabs is-centered">
              <ul>
                <li><a>Project 3</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Survey;