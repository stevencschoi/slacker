import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import axios from "axios"

export function useUserData() {
  // const [state, setState] = useState({
  //   isLoggedIn: false,
  //   inputs: { username: "", password: "" },
  // });
  const [state, setState] = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (state.inputs.password !== state.inputs.passwordConfirmation) {
      return alert("password doesn't match")
    }
    console.log(state.inputs);
    axios.post("http://localhost:2468/register", {
      inputs: state.inputs
    })
    .then(res => {
      console.log("data", res)
    })
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
