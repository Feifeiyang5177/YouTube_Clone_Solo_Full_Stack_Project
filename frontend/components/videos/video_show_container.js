import {connect} from "react-redux";
import {fetchVideo} from '../../actions/videos_action';
import VideoShow from "./video_show";

const mSTP = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId]
})

const mDTP = (dispatch) =>({
    fetchVideo: videoId => dispatch(fetchVideo(videoId))
})

export default connect(mSTP, mDTP)(VideoShow)
