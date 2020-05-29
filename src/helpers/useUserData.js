import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import axios from "axios"
import Cookies from "js-cookie"

export function useUserData() {
  const [state, setState] = useContext(UserContext);
  // const [state, setState] = useState({
  //   isLoggedIn: false,
  //   inputs: { username: "", password: "" },
  // });
  const handleSubmitLogin = e => {
    e.preventDefault();
    // console.log(state.inputs);
    axios.post("http://localhost:2468/login", {
      username: state.inputs.username,
      password: state.inputs.password
    })
      .then(res => {
        setState(prev => ({...prev, isLoggedIn: true}))
        Cookies.set('userId', res.data._id);
      })
  };
  
  const handleSubmitLogut = e => {
    e.preventDefault();
    axios.post("http://localhost:2468/logout")
      .then(() => {
        setState(prev => ({...prev, isLoggedIn: false}))
        Cookies.remove('userId');
      })
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (state.inputs.password !== state.inputs.passwordConfirmation) {
      return alert("password doesn't match")
    }
    // console.log(state.inputs);
    axios.post("http://localhost:2468/register", {
      inputs: state.inputs
    })
      .then(res => {
        Cookies.set('userId', res.data._id);
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

  return { state, handleSubmit, handleInputChange, handleSubmitLogin, handleSubmitLogut };
}
