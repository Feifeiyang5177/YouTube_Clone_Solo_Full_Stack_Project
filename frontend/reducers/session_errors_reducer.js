import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS,
} from "../actions/session_actions";
 
const sessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;

    case CLEAR_ERRORS:
    case RECEIVE_CURRENT_USER:
      return [];
      
    default:
      return state;
  }
};

export default sessionErrorsReducer;
