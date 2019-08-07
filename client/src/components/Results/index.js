import React, { Component } from "react";
import "../Results/style.css";
import Nav from "../Nav/index.js";
import { Link } from "react-router-dom";
import API from "../../utils/API.js";


class Results extends Component {
  state = {
    expiration: 0
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    API.getUsers()
      .then(res => {
        console.log(res.data[0].expiration)
        this.setState({ expiration: res.data[0].expiration })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <section className="hero is-fullheight is-default is-bold">
        <Nav />
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <div className="box has-text-centered" style={{ fontSize: 50 }}>
                  <strong>Years Left!</strong>
                  <br />
                  <strong style={{ color: "red" }}>{this.state.expiration}</strong>
                  <br />
                </div>
              </div>
              <div className="column is-half">
                <div className="box has-text-centered">
                  <h1>
                    <strong>Want to increase your longevity?</strong>
                  </h1>
                  <br />
                  <div className="recipes button is-success">
                    Find healthy recipes
                  </div>
                  <br />
                  <br />
                  <Link to="/Map" target="_blank">
                    <div className="gyms button is-warning">
                      Find nearby gyms
                    </div>
                  </Link>
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
}

export default Results;