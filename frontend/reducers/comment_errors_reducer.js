import {
  RECEIVE_COMMENT_ERRORS,
  CLEAR_COMMENT_ERRORS,
} from "../actions/comment_actions";
  
export default (state = [], action) => {
  
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      // debugger
      return action.errors;

    case CLEAR_COMMENT_ERRORS:
      return []; 

    default:
      return state;
  }
};
