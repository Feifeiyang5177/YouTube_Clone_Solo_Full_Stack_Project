import {
  RECEIVE_ALL_COMMENTS,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  RECEIVE_COMMENT,
} from "../actions/comment_actions";

const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case CREATE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return nextState;
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return nextState;
    case UPDATE_COMMENT:
      nextState[action.comment.id] = action.comment;
      return nextState;
    case DELETE_COMMENT:
      delete nextState[action.commentId];
      return nextState;
    default:
      return oldState;
  }
};
export default commentsReducer;
