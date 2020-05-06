import React from "react";
import Header from "./components/partials/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Header />
    </Router>
  );
}

export default App;
// <Nav />
