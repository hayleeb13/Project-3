import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Survey from "./components/Survey";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
  <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/survey" component={Survey} />
      <Route exact path="/login" component={Login} />
</Router>
  )
}

export default App;