import { connect } from "react-redux";
import {
  thunkFetchComments,
  thunkUpdateComment,
  thunkDeleteComment,
} from "../../actions/comment_actions";
import CommentIndex from "./comment_index";
import { withRouter } from "react-router";


const mSTP = (state, ownProps) => ({
  comments: Object.values(state.entities.comments),
  video: state.entities.videos[ownProps.match.params.videoId],
  currentUser: state.session.currentUser,
  //   currentUser: state.entities.users[state.session.id],
}); 

const mDTP = (dispatch) => ({
  fetchComments: () => dispatch(thunkFetchComments()),
  updateComment: (comment) => dispatch(thunkUpdateComment(comment)),
  deleteComment: (commentId) => dispatch(thunkDeleteComment(commentId)),
}); 

export default withRouter(connect(mSTP, mDTP)(CommentIndex));
// export default connect(mSTP, mDTP)(CommentIndex);
