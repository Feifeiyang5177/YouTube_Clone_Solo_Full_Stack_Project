import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import commentErrorsReducer from "./comment_errors_reducer";

const errors = combineReducers({
  sessionErrors: sessionErrorsReducer,
  comments: commentErrorsReducer,
}); 

export default errors;
