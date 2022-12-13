import { INIT_STATE } from "../../constant";
import { getType, showModalLogin, hideModalLogin } from "../actions/index";

export const modalsAuth = (state = INIT_STATE.modalsAuth, action) => {
  switch (action.type) {
    // Show Modal Login
    case getType(showModalLogin):
      return {
        isShowModal: true,
      };
    case getType(hideModalLogin):
      return {
        isShowModal: false,
      };
    default:
      return state;
  }
};
