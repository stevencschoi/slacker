import { useState, useContext } from "react";
import { UserContext } from "../components/UserContext";

export function useUserData() {
  // const [state, setState] = useState({
  //   isLoggedIn: false,
  //   inputs: { username: "", password: "" },
  // });
  const [state, setState] = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state.inputs);
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

  return { state, handleSubmit, handleInputChange };
}
