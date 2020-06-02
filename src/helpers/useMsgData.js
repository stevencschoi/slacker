import { useContext } from "react";
import { MsgContext } from "../components/MsgContext";
import axios from "axios";
import Cookies from "js-cookie";

export function useMsgData() {
  const [state, setState] = useContext(MsgContext);

  const clearMsg = () => {
    setState(prev => ({
      ...prev,
      msgInputs: {
        message: "",
      },
    }));
  };

  const handleMsgChange = e => {
    e.persist();
    const msgValues = { ...state.inputs, [e.target.name]: e.target.value };
    setState(prev => ({
      ...prev,
      msgInputs: msgValues,
    }));
  };

  const handleMsgSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:2468/chat/send", {
        senderId: Cookies.get("userId"),
        receiverId: state.msgInputs.receiverId,
        message: state.msgInputs.message,
      })
      .then(res => {
        console.log("res", res.data);
        clearMsg();
        console.log("state", state.msgInputs);
      })
      .catch(err => console.error(err));
  };

  return {
    state,
    handleMsgChange,
    handleMsgSubmit,
  };
}
