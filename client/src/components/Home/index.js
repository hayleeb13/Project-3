import React from "react";
import "../Home/style.css";



function Home() {
  return (
    <section className="hero is-fullheight is-default is-bold">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
            {/* image deleted amk */}
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
      <div className="themeImage"> 
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-vcentered">
            <div className="column is-5">
              {/* deleted calm picture*/}
            </div>
            <div className="column is-6 is-offset-1">
              <h1 className="title is-2">Dying to Find Love</h1>
              <h2 className="subtitle is-4">
                How many years do you have left on this world and do you really
                want to spend them alone?
              </h2>
              <br />
              <p className="has-text-centered">
                <div className="button is-medium is-info is-outlined">
                  <Link to="/Survey">
                  Learn more
                  </Link>
                </div>
              </p>
            </div>
          </div>
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

export default Home;