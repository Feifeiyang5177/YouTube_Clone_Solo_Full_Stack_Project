import {connect} from "react-redux";
import { addViews, fetchVideos, fetchVideo} from "../../actions/videos_action";
import VideoShow from "./video_show";
import {
  thunkFetchComments,
} from "../../actions/comment_actions";


 
const mSTP = (state, ownProps) => ({
  video: state.entities.videos[ownProps.match.params.videoId],
  videos: Object.values(state.entities.videos),
  currentUser: state.session.currentUser,
  users: state.entities.users
}); 
 
const mDTP = (dispatch) => ({
  // addViews: (videoId) => dispatch(addViews(videoId)),
  fetchVideos: () => dispatch(fetchVideos()),
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
  fetchComments: () => dispatch(thunkFetchComments()),
}); 

export default connect(mSTP, mDTP)(VideoShow)
