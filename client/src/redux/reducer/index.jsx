import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import posts from "./posts";
import modals from "./modals";
import modalsUpdate from "./modalsUpdate";
import authReducer from "./auth";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};
const rootReducer = combineReducers({
  posts,
  modals,
  modalsUpdate,
  authReducer,
});

export default persistReducer(persistConfig, rootReducer);
