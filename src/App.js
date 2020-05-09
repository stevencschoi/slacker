import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Footer from "./components/Footer";
import { MyContextProvider } from "./components/MyContext";

import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <MyContextProvider>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/register" exact component={Register} />
        </Switch>
        <Footer />
      </MyContextProvider>
    </Router>
  );
}

export default App;
