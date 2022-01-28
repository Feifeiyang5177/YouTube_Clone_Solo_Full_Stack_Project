import * as commentAPIUtil from "../util/comment_api_util";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments,
});
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});
export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment,
});
export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});
export const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});
export const deleteComment = (commentId) => ({
  type: DELETE_COMMENT,
  commentId,
});
export const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors,
});

export const clearCommentErrors = () => ({
  type: CLEAR_COMMENT_ERRORS,
});

export const thunkFetchComments = () => (dispatch) => {
  return commentAPIUtil
    .apiReceiveAllComments()
    .then((comments) => dispatch(receiveComments(comments)));
};

export const thunkFetchComment = (commentId) => (dispatch) =>
  commentAPIUtil
    .apiReceiveComment(commentId)
    .then((comment) => dispatch(receiveComment(comment)));

export const thunkCreateComment = (comment) => (dispatch) => {
  // debugger
  return commentAPIUtil.apiCreateComment(comment).then(
    (comment) => dispatch(createComment(comment)),
    (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
  );};
export const thunkUpdateComment = (comment) => (dispatch) =>
  commentAPIUtil.apiUpdateComment(comment).then(
    (comment) => dispatch(updateComment(comment)),
    (errors) => dispatch(receiveCommentErrors(errors.responseJSON))
  );

export const thunkDeleteComment = (commentId) => (dispatch) =>
  commentAPIUtil
    .apiDeleteComment(commentId)
    .then(() => dispatch(deleteComment(commentId)));
