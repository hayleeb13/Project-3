import React, { Component } from "react";
import $ from "jquery";

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
      <div>
        <strong>
          <center>
            <h1 style={{ padding: "20px", fontSize: "40px" }}>{this.state.mealname}</h1>
          </center>
        </strong>
        <center>
          <h6 style={{ padding: "20px" }}>{this.state.instructions}</h6>
        </center>
        <div style={{ padding: "30px" }} className="card">
          <div className="card-body">
              {array.map(recipe => (
                <li className="card-text">{recipe}</li>
              ))}
          </div>
        </div>
              <center style={{ padding: "30px" }} ><button onClick = { refreshPage } className="recipes button is-success">New Recipe</button></center>
      </div>
    );
  }
}
export default Recipes;