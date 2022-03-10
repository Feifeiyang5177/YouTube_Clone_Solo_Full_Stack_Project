import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  thunkUpdateComment,
  clearCommentErrors,
  thunkFetchComment,
} from "../../actions/comment_actions";
import CreateCommentForm from "./comment_form";

const mapStateToProps = (state, ownProps) => ({
  formType: "update",
  errors: state.errors.comments,
  comment: state.entities.comments[ownProps.match.params.commentId],
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateComment: (comment) => dispatch(thunkUpdateComment(comment)),
  clearErrors: () => dispatch(clearCommentErrors()),
  fetchComment: (commentId) => dispatch(thunkFetchComment(commentId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm)
);
