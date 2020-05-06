import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import Footer from "./components/Footer";
import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
