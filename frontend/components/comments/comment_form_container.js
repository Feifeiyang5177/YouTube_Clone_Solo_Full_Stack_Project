import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  thunkCreateComment,
  clearCommentErrors,
} from "../../actions/comment_actions";
import CreateCommentForm from "./comment_form";


const mapStateToProps = (state, ownProps) => ({
  formType: "create",
  comment: {
    body: "",
    video_id: ownProps.match.params.videoId,
    commenter_id: state.session?.currentUser?.id,
  },
  errors: state.errors.comments,
  comments: Object.values(state.entities.comments),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(thunkCreateComment(comment)),
  clearErrors: () => dispatch(clearCommentErrors()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm)
);

// export default connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm);
