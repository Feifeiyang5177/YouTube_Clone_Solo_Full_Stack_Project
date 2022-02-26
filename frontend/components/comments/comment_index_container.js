import { connect } from "react-redux";
import {
  thunkFetchComments,
  thunkUpdateComment,
  thunkDeleteComment,
  thunkFetchComment,
} from "../../actions/comment_actions";
import CommentIndex from "./comment_index";
import { withRouter } from "react-router";


const mSTP = (state, ownProps) => ({
  comments: Object.values(state.entities.comments),
  video: state.entities.videos[ownProps.match.params.videoId],
  comment: state.entities.comments[ownProps.match.params.commentId],
  currentUser: state.session.currentUser
}); 

const mDTP = (dispatch) => ({
  fetchComments: () => dispatch(thunkFetchComments()),
  updateComment: (comment) => dispatch(thunkUpdateComment(comment)),
  deleteComment: (commentId) => dispatch(thunkDeleteComment(commentId)),
  fetchComment: (commentId) => dispatch(thunkFetchComment(commentId)),
}); 

export default withRouter(connect(mSTP, mDTP)(CommentIndex));
// export default connect(mSTP, mDTP)(CommentIndex);
