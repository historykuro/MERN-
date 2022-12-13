import { INIT_STATE } from "../../constant";
import { getType, showModalUpdate, hideModalUpdate } from "../actions";

const modalsUpdate = (state = INIT_STATE.modalsUpdate, action) => {
  // Show Modal Update
  switch (action.type) {
    case getType(showModalUpdate):
      return {
        isShowUpdate: true,
      };
    case getType(hideModalUpdate):
      return {
        isShowUpdate: false,
      };

    default:
      return state;
  }
};

export default modalsUpdate;
