import React, { useState } from "react";
import Cookies from "js-cookie";
// import React from "react";

// const UserContext = React.createContext([{}, () => {}]);
const UserContext = React.createContext();

const UserContextProvider = props => {
  const [state, setState] = useState({
    logo: require("../assets/slacker.jpeg"),
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
    isLoggedIn: Cookies.get('userId') ? true : false,
    inputs: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    }
  
  });

  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
