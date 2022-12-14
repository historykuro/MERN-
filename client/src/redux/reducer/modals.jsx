import { INIT_STATE } from "../../constant";
import { getType, showModal, hideModal } from "../actions";

const modals = (state = INIT_STATE.modals, action) => {
  switch (action.type) {
    case getType(showModal):
      return {
        isShow: true,
      };
    case getType(hideModal):
      return {
        isShow: false,
      };

    default:
      return state;
  }
};

export default modals;
