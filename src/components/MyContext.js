// import React, { useState } from "react";
import React from "react";

// const MyContext = React.createContext([{}, () => {}]);
const MyContext = React.createContext();

const MyContextProvider = props => {
  // const [state, setState] = useState({
  const state = {
    // logo: require("../assets/pic.JPG"),
    company: "Steven Choi",
    github: `https://github.com/stevencschoi/`,
    facebook: `https://www.facebook.com/stevencschoi`,
    instagram: `https://www.instagram.com/the_steve/`,
    twitter: `https://twitter.com/thestevechoi`,
    linkedin: `https://www.linkedin.com/in/choisteven/`,
  };
  // });
  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
