import { useState } from "react";

export function useUserData() {
  const [state, setState] = useState({
    inputs: { username: "", password: "" },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.inputs);
  };

  const handleInputChange = (e) => {
    e.persist();
    // console.log(e.target.value);
    setState((prev) => ({
      ...prev,
      inputs: { username: e.target.value },
    }));
  };

  return { state, handleSubmit, handleInputChange };
}
