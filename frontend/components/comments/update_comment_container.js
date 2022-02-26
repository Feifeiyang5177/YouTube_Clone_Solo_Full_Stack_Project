import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  thunkUpdateComment,
  clearCommentErrors,
  thunkFetchComment,
} from "../../actions/comment_actions";
import CreateCommentForm from "./comment_form";

// class UpdateCommentForm extends React.Component {
//   componentDidMount () {
//     this.props.fetchComment(this.props.match.params.commentId);
//   }

//   render() {
//     const {updateComment, formType, comment} = this.props;
//     if (!comment) return null;
//     return (
//       <CreateCommentForm 
//       updateComment={updateComment}
//       formType={formType}
//       comment = {comment}
//       />
//     );
//   }

// }

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





// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import {
//   thunkUpdateComment,
//   clearCommentErrors,
// } from "../../actions/comment_actions";
// import CreateCommentForm from "./comment_form";

// const mapStateToProps = (state, ownProps) => ({
//   formType: "update",
//   comment: {
//     body: "",
//     video_id: ownProps.match.params.videoId,
//     commenter_id: state.session?.currentUser?.id,
//   },
//   errors: state.errors.comments,
//   comments: Object.values(state.entities.comments),
//   currentUser: state.session.currentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   updateComment: (comment) => dispatch(thunkUpdateComment(comment)),
//   clearErrors: () => dispatch(clearCommentErrors()),
// });

// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm)
// );
