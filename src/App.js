import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Chatroom from "./components/channels/Chatroom";

// import Footer from "./components/Footer";
import { UserContextProvider } from "./components/UserContext";
import { MsgContextProvider } from "./components/MsgContext";

import "./styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App"></div>
        <UserContextProvider>
          <Header />
          <div className="main-container">
            <Sidebar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/register" exact component={Register} />
              <MsgContextProvider>
                <Route path="/chat/new" exact component={Chatroom} />
              </MsgContextProvider>
            </Switch>
          </div>
        </UserContextProvider>
      </Router>
    </Provider>
  );
}

export default App;
