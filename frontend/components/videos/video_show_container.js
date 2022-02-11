import {connect} from "react-redux";
import { addViews, fetchVideo, fetchVideos } from "../../actions/videos_action";
import VideoShow from "./video_show";
import {
  thunkFetchComments,
} from "../../actions/comment_actions";
import { thunkFetchAllUsers } from "../../actions/user_actions";


const mSTP = (state, ownProps) => ({
  video: state.entities.videos[ownProps.match.params.videoId],
  videos: Object.values(state.entities.videos),
  // currentUser: state.entities.users[state.session.id],
  currentUser: state.session.currentUser,
  users: state.entities.users
}); 
 
const mDTP = (dispatch) => ({
  addViews: (videoId) => dispatch(addViews(videoId)),
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
  fetchVideos: () => dispatch(fetchVideos()),
  fetchComments: () => dispatch(thunkFetchComments()),
  fetchUsers: () => dispatch(thunkFetchAllUsers()),
});

export default connect(mSTP, mDTP)(VideoShow)
