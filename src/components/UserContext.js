// import React, { useState } from "react";
import React from "react";

// const UserContext = React.createContext([{}, () => {}]);
const UserContext = React.createContext();

const UserContextProvider = props => {
  // const [state, setState] = useState({
  const state = {
    logo: require("../assets/slacker.png"),
    company: "slacker",
    firstName: "Steven",
    lastName: "Choi",
    username: "the Steve",
    avatar: require("../assets/mj.jpg"),
    github: `https://github.com/stevencschoi/`,
    facebook: `https://www.facebook.com/stevencschoi`,
    instagram: `https://www.instagram.com/the_steve/`,
    twitter: `https://twitter.com/thestevechoi`,
    linkedin: `https://www.linkedin.com/in/choisteven/`,
  };
  // });
  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
