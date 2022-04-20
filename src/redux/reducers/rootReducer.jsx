import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";

export const rootReducer = combineReducers({
  userReducer,
  movieReducer,
});
