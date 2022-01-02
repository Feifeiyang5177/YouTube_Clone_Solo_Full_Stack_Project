import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/likes_action";
import Likes from "./likes";

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUserId: session.id,
    currentUser: users[session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),
  };
};

export default connect(mSTP, mDTP)(Likes);
