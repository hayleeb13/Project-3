import React from "react";
import "../Survey/style.css";
import { Link } from "react-router-dom";


function Survey() {

  return(

          <section className="hero is-fullheight is-default is-bold">
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
      
                <div className="box">
                <h1><strong>We need to know more about you and the habits that affect your longevity:</strong></h1>
                <br></br>
                    <div className="field is-horizontal">
                      <div className="field-label is-normal">
                        <label className="label">About You</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <p className="control is-expanded has-icons-left">
                            <input className="input" type="text" placeholder="Name" />
                          </p>
                        </div>
                        <div className="field">
                          <p className="control is-expanded has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="field is-horizontal">
                      <div className="field-label" />
                      <div className="field-body">
                        <div className="field is-expanded">
                          <div className="field has-addons">
                            <p className="control is-expanded">
                              <input className="input" type="password" placeholder="Password" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br></br>
                    <div className="field is-horizontal">
                      <div className="field-label is-normal">
                        <label className="label">Do you smoke?</label>
                      </div>
                      <div className="field-body">
                        <div className="field is-narrow">
                          <div className="control">
                            <div className="select is-fullwidth">
                              <select>
                                <option>Select from</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="field is-horizontal">
                      <div className="field-label is-normal">
                        <label className="label">Do you drink alcohol X times per week?</label>
                      </div>
                      <div className="field-body">
                        <div className="field is-narrow">
                          <div className="control">
                            <div className="select is-fullwidth">
                              <select>
                                <option>Select from</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="field is-horizontal">
                      <div className="field-label is-normal">
                        <label className="label">Do you exercise X minutes at least 2 times per week?</label>
                      </div>
                      <div className="field-body">
                        <div className="field is-narrow">
                          <div className="control">
                            <div className="select is-fullwidth">
                              <select>
                                <option>Select from</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="field is-horizontal">
                      <div className="field-label is-normal">
                        <label className="label">Do you eat fast food more than X times per week?</label>
                      </div>
                      <div className="field-body">
                        <div className="field is-narrow">
                          <div className="control">
                            <div className="select is-fullwidth">
                              <select>
                                <option>Select from</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br></br>
                    <h1><strong>How would you like to receive your results?</strong></h1>
                    <div className="field is-text-centered">
                      <div className="field-label" />
                      <div className="field-body">
                        <div className="field is-expanded">
                          <div className="field has-addons">
                              <select>
                                <option>Select from</option>
                                <option>With appropo doom and despair!</option>
                                <option>With positivity and hope for change!</option>
                              </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h1><strong>Would you like your significant other to test too?</strong></h1>
                    <div className="field is-text-centered">
                      <div className="field-label" />
                      <div className="field-body">
                        <div className="field is-expanded">
                          <div className="field has-addons">
                              <select>
                                <option>Select from</option>
                                <option>Yes</option>
                                <option>No</option>
                                <option>I don't have a significant other</option>
                              </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="field is-grouped is-grouped-centered">
                      <p className="control">
                        <a className="button is-link">
                          Submit
                        </a>
                      </p>
                      <p className="control">
                        <a className="button is-link">
                          Cancel
                        </a>
                      </p>
                    </div>
                  </div>
                </div>  
              </div>    
          
          </section>
           
    );
  }

export default Survey;