import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/likes_action";
import LikesCount from "./likes";

const mSTP = (state) => {
  return {
    currentUserId: state.session.id,
    currentUser: state.session.currentUser,
    like: {
      like_num: 0
    },
  };
};

const mDTP = (dispatch) => {
  return {
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),
  };
};

export default connect(mSTP, mDTP)(LikesCount);

// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm)
// );