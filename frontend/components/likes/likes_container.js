import { connect } from "react-redux";
import {
  thunkFetchLikes,
  thunkDeleteLike,
  thunkFetchLike,
  thunkCreateLike,
} from "../../actions/likes_action";
import LikesCount from "./likes";
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    currentUser: state.session.currentUser,
    like: {
      like_num: 0,
      video_id: ownProps.match.params.videoId,
      user_id: state.session?.currentUser?.id,
      // comment_id: ownProps.match.params.commentId
    },
  };
};

const mDTP = (dispatch) => {
  return {
    fetchLikes: () => dispatch(thunkFetchLikes()),
    deleteLike: (likeId) => dispatch(thunkDeleteLike(likeId)),
    fetchLike: (likeId) => dispatch(thunkFetchLike(likeId)),
    createLike: (like) => dispatch(thunkCreateLike(like)),
  };
};

export default withRouter(connect(mSTP, mDTP)(LikesCount));
