import setAuthToken from "../../ultis/setAuthToken";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case "AUTH":
      setAuthToken(
        localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
      );
      return { ...state, authData: action?.data };
    case "LOGOUT":
      setAuthToken(localStorage.clear());
      return { ...state, authData: null };

    default:
      return state;
  }
};

export default authReducer;
