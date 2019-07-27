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
              <div className="container">
                <h4>
                  <strong>Survey Questions</strong>
                </h4>
                <hr />
                <h3>
                  <strong>About You</strong>
                </h3>
                <h4>Name (Required)</h4>
                <input type="text" id="name" className="form-control" required />
                <h4>Link to Photo Image (Required)</h4>
                <input type="text" id="photo" className="form-control" required />
                <hr />
                <h3>
                  <strong>Question 1</strong>
                </h3>
                <h4>Do you smoke?</h4>
                <select className="chosen-select" id="q1">
                  <option value />
                  <option value={1}>Yes</option>
                  <option value={2}>No</option>
                </select>
                <h3>
                  <strong>Question 2</strong>
                </h3>
                <h4>Do you smoke more than X amount of times per week?</h4>
                <select className="chosen-select" id="q2">
                  <option value />
                  <option value={1}>Yes</option>
                  <option value={2}>No</option>
                </select>
                <h3>
                  <strong>Question 3</strong>
                </h3>
                <h4>Do you exercise at least X amount of minutes 2 times per week?</h4>
                <select className="chosen-select" id="q3">
                  <option value />
                  <option value={1}>Yes</option>
                  <option value={2}>No</option>
                </select>
                <h3>
                  <strong>Question 4</strong>
                </h3>
                <h4>Do you eat fast food more than X times per week?</h4>
                <select className="chosen-select" id="q4">
                  <option value />
                  <option value={1}>Yes</option>
                  <option value={2}>No</option>
                </select>
                <h3>
                  <strong>Question 5</strong>
                </h3>
                <h4>(Question)</h4>
                <select className="chosen-select" id="q5">
                  <option value />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <h3>
                  <strong>Question 6</strong>
                </h3>
                <h4>(Question)</h4>
                <select className="chosen-select" id="q5">
                  <option value />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <h3>
                  <strong>Question 7</strong>
                </h3>
                <h4>(Question)</h4>
                <select className="chosen-select" id="q5">
                  <option value />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <h3>
                  <strong>Question 8</strong>
                </h3>
                <h4>(Question)</h4>
                <select className="chosen-select" id="q5">
                  <option value />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <h3>
                  <strong>Question 9</strong>
                </h3>
                <h4>(Question)</h4>
                <select className="chosen-select" id="q5">
                  <option value />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <h3>
                  <strong>Question 10</strong>
                </h3>
                <h4>(Question)</h4>
                <select className="chosen-select" id="q5">
                  <option value />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
                <br />
                <br />
                <button type="submit" className="btn btn-primary btn-lg btn-block" id="submit">
                  <i className="fa fa-check-circle" aria-hidden="true" />
                  Submit</button>
              </div>
            </div>
          </section>
        );
      }

export default Survey;