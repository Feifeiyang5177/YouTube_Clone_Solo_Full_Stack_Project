import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  thunkCreateComment,
  clearCommentErrors,
} from "../../actions/comment_actions";
import CreateCommentForm from "./comment_form";
// import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  comment: {
    body: "",
    video_id: ownProps.match.params.videoId,
    commenter_id: state.session?.currentUser?.id,
  },
  formType: "create",
  errors: state.errors.comments,
  comments: Object.values(state.entities.comments),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(thunkCreateComment(comment)),
//   openModal: (modal) => dispatch(openModal(modal)),
  clearErrors: () => dispatch(clearCommentErrors()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm)
);
