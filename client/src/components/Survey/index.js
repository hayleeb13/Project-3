import React, { Component } from "react";
import "../Survey/style.css";
import { Link } from "react-router-dom";
import Nav from "../Nav/index.js";
import API from "../../utils/API.js";

class Survey extends Component {
  state = {
    email: "",
    gender: "",
    age: "",
    smoke: "",
    drink: "",
    exercise: "",
    diet: "",
    expiration: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    console.log("handleinput");
    this.setState({
      [event.target.id]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var smoke = document.getElementById("smoke").value;
    var drink = document.getElementById("drink").value;
    var exercise = document.getElementById("exercise").value;
    var diet = document.getElementById("diet").value;

    if (email === "") {
      alert("Fill out your email!");
    }
    if (gender === "Select from") {
      alert("Fill out your gender!");
    } else if (age === "") {
      alert("Fill out your age!");
    } else if (smoke === "Select from") {
      alert("Fill out if you smoke!");
    } else if (drink === "Select from") {
      alert("Fill out if you drink!");
    } else if (exercise === "Select from") {
      alert("Fill out your exercise habits!");
    } else if (diet === "Select from") {
      alert("Fill out your eating habits!");
    } else {
      var expiration = 0;
      if (gender === "Male") {
        expiration = 76;
      } else if (gender === "Female") {
        expiration = 81;
      }
      if (smoke === "Yes") {
        expiration -= 10;
      }
      if (drink === "Yes") {
        expiration -= 2;
      }
      if (diet === "Yes") {
        var loss = expiration * 0.14;
        expiration -= loss;
      }
      if (exercise === "Yes") {
        expiration += 3;
      }
      expiration -= age;
      console.log(expiration);

      this.setState({
        email: email,
        gender: gender,
        age: age,
        smoke: smoke,
        drink: drink,
        exercise: exercise,
        diet: diet,
        expiration: expiration
      });

      const obj = {
        name: "Haylee",
        email: email,
        gender: gender,
        age: age,
        smoke: smoke,
        drink: drink,
        exercise: exercise,
        diet: diet,
        expiration: expiration
      };
      console.log(obj);

      // axios.post('http://localhost:3000/project-3', obj)
      //   .then(res => console.log(res.data));

      // put (update)
      API.updateUser("Haylee", obj).then(data => {
        console.log(data.data);
        this.props.history.push("/Results");
      });
      //
    }
  };

  render() {
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
                  <label className="label">What is your email?</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <div className="control">
                      <input
                        className="input"
                        onChange={this.handleInputChange}
                        type="String"
                        placeholder="Email"
                        id="email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Are you male or female?</label>
                </div>
                <div className="field-body">
                  <div className="field is-narrow">
                    <div className="control">
                      <div className="select is-fullwidth">
                        <select
                          name={"gender"}
                          onChange={this.handleInputChange}
                          id="gender"
                        >
                          return (
                          <option value={"Select from"} label={"Select from"}>
                            {"Select from"}
                          </option>
                          <option value={"Male"} label={"Male"}>
                            {"Male"}
                          </option>
                          <option value={"Female"} label={"Female"}>
                            {"Female"}
                          </option>
                          )
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
                        onChange={this.handleInputChange}
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
                        <select
                          name={"smoke"}
                          onChange={this.handleInputChange}
                          id="smoke"
                        >
                          return (
                          <option value={"Select from"} label={"Select from"}>
                            {"Select from"}
                          </option>
                          <option value={"Yes"} label={"Yes"}>
                            {"Yes"}
                          </option>
                          <option value={"No"} label={"No"}>
                            {"No"}
                          </option>
                          )
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
                        <select
                          name={"drink"}
                          onChange={this.handleInputChange}
                          id="drink"
                        >
                          return (
                          <option value={"Select from"} label={"Select from"}>
                            {"Select from"}
                          </option>
                          <option value={"Yes"} label={"Yes"}>
                            {"Yes"}
                          </option>
                          <option value={"No"} label={"No"}>
                            {"No"}
                          </option>
                          )
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
                        <select
                          name={"exercise"}
                          onChange={this.handleInputChange}
                          id="exercise"
                        >
                          return (
                          <option value={"Select from"} label={"Select from"}>
                            {"Select from"}
                          </option>
                          <option value={"Yes"} label={"Yes"}>
                            {"Yes"}
                          </option>
                          <option value={"No"} label={"No"}>
                            {"No"}
                          </option>
                          )
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
                        <select
                          name={"diet"}
                          onChange={this.handleInputChange}
                          id="diet"
                        >
                          return (
                          <option value={"Select from"} label={"Select from"}>
                            {"Select from"}
                          </option>
                          <option value={"Yes"} label={"Yes"}>
                            {"Yes"}
                          </option>
                          <option value={"No"} label={"No"}>
                            {"No"}
                          </option>
                          )
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              {/*              <h1>
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
</div>*/}

              <div className="field is-grouped is-grouped-centered">
                <div className="control" id="submit">
                  <button
                    onClick={this.handleFormSubmit}
                    className="button is-link"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                <div className="control">
                  <Link to="/">
                    <div className="button is-link">Cancel</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Survey;