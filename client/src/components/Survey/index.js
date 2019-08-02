import React from "react";
import "../Survey/style.css";
import { Link } from "react-router-dom";
import Nav from "../Nav/index.js";

function Survey({ name, handleInputChange, handleFormSubmit }) {
  return (
    <section className="hero is-fullheight is-default is-bold">
      <Nav />

      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="box has-text-centered">
            <h1>
              <strong>
                We need to know more about you and the habits that affect your
                longevity:
              </strong>
            </h1>
            <br />
            <br />
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Are you male or female?</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select id="gender">
                        <option value="">Select from</option>
                        <option value="1">Male</option>
                        <option value="2"> Female</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">How old are you?</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="Age"
                      id="age"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Do you smoke?</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select id="smoke">
                        <option value="">Select from</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">
                  Do you consume more than 5 alcoholic drinks per week?
                </label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select id="drink">
                        <option value="">Select from</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">
                  Do you get at least 25 minutes of moderate exercise per day?
                </label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select id="exercise">
                        <option value="">Select from</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">
                  Do you eat more that one processed meal and one processed
                  snack per day?
                </label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select id="diet">
                        <option value="">Select from</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <h1>
              <strong>How would you like to receive your results?</strong>
            </h1>
            <div className="field is-text-centered">
              <div className="field-label" />
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="field has-addons">
                    <select id="view">
                      <option value="">Select from</option>
                      <option value="1">With apropos doom and despair</option>
                      <option value="2">
                        With positivity and hope for change
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <h1>
              <strong>
                Would you like your significant other to test too?
              </strong>
            </h1>
            <div className="field is-text-centered">
              <div className="field-label" />
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="field has-addons">
                    <select id="partner">
                      <option value="">Select from</option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                      <option value="2">
                        I don't have a significant other
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-grouped is-grouped-centered">
              <p className="control" id="submit">
                <Link to="/Results">
                  <button className="button is-link" type="submit">
                    Submit
                  </button>
                </Link>
              </p>
              <p className="control">
                <Link to="/">
                  <div className="button is-link">Cancel</div>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Survey;