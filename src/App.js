import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
// <Nav />
