import React, { Component } from "react";
import Nav from "../Nav/index";
import API from "../../utils/API";
import "../Survey/style.css";

class Match extends Component {
  state = {
    match: "",
    age: 0,
    email: ""
  };

  componentDidMount() {
    this.loadUser();
    this.loadMatch();
  }

  loadUser = () => {
    API.getUsers()
      .then(res => {
        this.setState({ expiration: res.data[0].expiration });
      })
      .catch(err => console.log(err));
  };

  loadMatch = () => {
    API.getUsers().then(res => {
      for (let index = 0; index < res.data.length; index++) {
        if (
          res.data[index].expiration - this.state.expiration > 0 &&
          res.data[index].expiration - this.state.expiration < 30
        ) {
          this.setState({ match: res.data[index].name });
          this.setState({ age: res.data[index].age });
          this.setState({ email: res.data[index].email });
        } else if (
          res.data[index].expiration - this.state.expiration < 0 &&
          res.data[index].expiration - this.state.expiration > -30
        ) {
          this.setState({ match: res.data[index].name });
          this.setState({ age: res.data[index].age });
          this.setState({ email: res.data[index].email });
        } else {
          this.setState({ match: "You die alone!" });
        }
      }
    });
  };

  render() {
    return (
      <section className="hero is-fullheight is-default is-bold">
        <Nav />
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="field is-grouped is-grouped-centered">
              <div className="box has-text-centered" style={{ fontSize: 50 }}>
                Till death do us part!
                <div className="match">
                  <h1 style={{ color: "red" }}>Your Match:</h1>
                  <h1 style={{ fontSize: 50 }}>{this.state.match}</h1>
                  <h1 style={{ fontSize: 50 }}>{this.state.age}</h1>
                  <h1 style={{ fontSize: 50 }}>{this.state.email}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Match;