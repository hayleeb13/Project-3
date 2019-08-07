import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launch from "./components/Launch";
import Survey from "./components/Survey";
import Login from "./components/Login";
import Home from "./components/Home";
import Results from "./components/Results";
import Signup from "./components/Signup";
import Map from "./components/Map";
import Recipes from "./components/Recipes";

function App() {
  return (
  <Router>
      <Route exact path="/" component={Launch} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/survey" component={Survey} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/Map" component={Map} />
      <Route exact path="/Recipes" component={Recipes} />
</Router>
  )
}

export default App;