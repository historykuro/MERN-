import { createAction } from "redux-actions";

//
export const LOCAL_STORAGE_TOKEN_NAME = "data";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const showModal = createAction("SHOW_CREATE_POST_MODAL");
export const hideModal = createAction("HIDE_CREATE_POST_MODAL");

export const showModalUpdate = createAction("SHOW_UPDATE_POST_MODAL");
export const hideModalUpdate = createAction("HIDE_UPDATE_POST_MODAL");

export const showModalLogin = createAction("SHOW_LOGIN_MODAL");
export const hideModalLogin = createAction("HIDE_LOGIN_MODAL");

// handle Auth

