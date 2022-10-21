export function messagesReducer(state, action) {
  switch (action.type) {
    case "MESSAGE_REQUEST":
      return { ...state, loading: true, error: "" };
    case "MESSAGE_SUCCESS":
      return {
        ...state,
        loading: false,
        messages: action.payload,
        error: "",
      };
    case "MESSAGE_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export function recieverReducer(state, action) {
  switch (action.type) {
    case "RECIEVER_REQUEST":
      return { ...state, loading: true, error: "" };
    case "RECIEVER_SUCCESS":
      return {
        ...state,
        loading: false,
        reciever: action.payload,
        error: "",
      };
    case "RECIEVER_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export function selectedChatReducer(state, action) {
  switch (action.type) {
    case "CHAT_REQUEST":
      return { ...state, loading: true, error: "" };
    case "CHAT_SUCCESS":
      return {
        ...state,
        loading: false,
        Chat: action.payload,
        error: "",
      };
    case "CHAT_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
