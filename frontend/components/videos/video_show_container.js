import {connect} from "react-redux";
import { addViews, fetchVideo, fetchVideos } from "../../actions/videos_action";
import VideoShow from "./video_show";

const mSTP = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId],
    videos: Object.values(state.entities.videos)
})
 
const mDTP = (dispatch) => ({
  addViews: (videoId) => dispatch(addViews(videoId)),
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mSTP, mDTP)(VideoShow)
