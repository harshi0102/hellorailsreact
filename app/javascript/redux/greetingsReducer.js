import axios from "axios";

const RECEIVE_MESSAGE = "greetings/message";

const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  payload: message,
});

export default function greetingsReducer(state = [], action = {}) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

const fetchMessage = async () => {
  await axios.get("api/messages").then((response) => {
    return response.data.greeting;
  });
};

export { fetchMessage, receiveMessage };
