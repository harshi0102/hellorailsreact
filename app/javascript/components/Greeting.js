import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveMessage } from "../redux/greetingsReducer";
import axios from "axios";

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);

  async function fetchMessage() {
    await axios.get("api/messages").then((response) => {
      dispatch(receiveMessage(response.data.greeting));
    });
  }

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => fetchMessage()}>Greeting message</button>
    </div>
  );
};

export default Greeting;
