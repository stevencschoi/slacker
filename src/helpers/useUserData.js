import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import axios from "axios";
import Cookies from "js-cookie";

export function useUserData() {
  const [state, setState] = useContext(UserContext);

  const clearInputs = () => {
    setState(prev => ({
      ...prev,
      inputs: {},
      avatar: require("../assets/slacker.jpeg"),
    }));
  };

  const clearInfo = () => {
    setState(prev => ({ ...prev, firstName: "Steven", lastName: "Choi" }));
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    axios
      .post("http://localhost:2468/login", {
        username: state.inputs.username,
        password: state.inputs.password,
      })
      .then(res => {
        setState(prev => ({
          ...prev,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          username: res.data.username,
          avatar: res.data.avatar,
          isLoggedIn: true,
        }));
        Cookies.set("userId", res.data._id);
        clearInputs();
      });
  };

  const handleSubmitLogout = e => {
    e.preventDefault();
    axios.post("http://localhost:2468/logout").then(() => {
      setState(prev => ({ ...prev, isLoggedIn: false }));
      Cookies.remove("userId");
      clearInputs();
      clearInfo();
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (state.inputs.password !== state.inputs.passwordConfirmation) {
      return alert("Passwords don't match");
    }
    axios
      .post("http://localhost:2468/register", {
        inputs: state.inputs,
      })
      .then(res => {
        setState(prev => ({
          ...prev,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          username: res.data.username,
          avatar: res.data.avatar,
          isLoggedIn: true,
        }));
        Cookies.set("userId", res.data._id);
        clearInputs();
      });
  };

  const handleInputChange = e => {
    e.persist();
    // update state with the inputs from the form
    const inputValues = { ...state.inputs, [e.target.name]: e.target.value };
    setState(prev => ({
      ...prev,
      inputs: inputValues,
    }));
  };

  return {
    state,
    handleSubmit,
    handleInputChange,
    handleSubmitLogin,
    handleSubmitLogout,
  };
}
