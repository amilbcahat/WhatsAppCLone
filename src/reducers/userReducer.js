import Cookies from "js-cookie";

export function userReducer(
  state = Cookies.get("acduser") ? JSON.parse(Cookies.get("acduser")) : null,

  action
) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return null;
    case "VERIFY":
      return { ...state, verified: action.payload };

    default:
      return state;
  }
}
