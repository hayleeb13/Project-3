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
        this.setState({ expiration: res.data[0].expiration });
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
                  <strong style={{ color: "red" }}>
                    {this.state.expiration}
                  </strong>
                  <br />
                </div>
              </div>
              <div className="column is-half">
                <div className="box has-text-centered">
                  <h1>
                    <strong>Want to increase your longevity?</strong>
                  </h1>
                  <br />
                  <Link to="Recipes" target="_blank">
                  <div className="recipes button is-success">
                    Start Cooking At Home
                  </div>
                  </Link>
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
              <Link to="/Match" target="_blank">
              <div className="date button is-danger">Don't die alone</div>
              </Link>
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
        <p style={{ color: "white", padding: "30px" }}>All content found on the expirationdate.com Website, including: text, images, or other formats were created for informational purposes only. The Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Website.</p>
      </section>
    );
  }
}

export default Results;