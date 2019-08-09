import React, { Component } from "react";
import $ from "jquery";
import Nav from "../Nav";

function refreshPage () {
  window.location.reload();
}

class Recipes extends Component {
  state = {
    contacts: [],
    ingredients: [],
    measurements: [],
    mealname: "",
    instructions: ""
  };

  componentDidMount() {
    var url = "https://www.themealdb.com/api/json/v1/1/random.php";

    $.ajaxPrefilter(function(options) {
      if (options.crossDomain && $.support.cors) {
        options.url = "https://cors-anywhere.herokuapp.com/" + options.url;
      }
    });
    $.ajax(url).then(response => {
      console.log("response", response.meals[0]);
      var result = {};
      result["ingredients"] = [];
      result["measurements"] = [];
      for (let i = 1; i < 21; i++) {
        let ingredientName = "strIngredient" + i;
        let measurement = "strMeasure" + i;
        if (response.meals[0][ingredientName] === "") {
          break;
        }
        result["ingredients"].push(response.meals[0][ingredientName]);
        result["measurements"].push(response.meals[0][measurement]);
      }
      result["MealName"] = response.meals[0].strMeal;
      this.setState({
        ...this.state,
        ingredients: result["ingredients"],
        measurements: result["measurements"],
        mealname: response.meals[0].strMeal,
        instructions: response.meals[0].strInstructions
      });
      console.log("result", this.state.ingredients);
    });
  }

  render() {
    var array = [];
    for (let i = 0; i < this.state.ingredients.length; i++) {
      let str = this.state.ingredients[i] + ": " + this.state.measurements[i];
      array.push(str);
    }
    console.log("final array: ", array);
    return (
      <section className="hero is-fullheight is-default is-bold">
        <Nav />
        <div className="hero-body">
          <div className="container">
            <div className="row columns">
              <div className="column is-one-half">
                <div className="card large">
                  <div style={{padding: "10px"}}>
                      <center>
                        <h1 style={{fontSize: "30px", color: 'green'}}><strong>{this.state.mealname}</strong></h1>
                      </center>
                      <br></br>
                      <div className="row columns">
                        <div className="column is-one-half">
                          <div style={{ padding: "30px" }} className="card">
                            <div className="card-body">
                              <h6><center>{this.state.instructions}</center></h6>
                            </div>
                          </div>
                        </div>
                        <div className="column is-one-half">
                          <div style={{ padding: "30px" }} className="card">
                            <div className="card-body">
                                {array.map(recipe => (
                                  <li className="card-text">{recipe}</li>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                            <center style={{ padding: "30px" }} ><button onClick = { refreshPage } className="recipes button is-success">New Recipe</button></center>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
    </section>  
    );
  }
}
export default Recipes;