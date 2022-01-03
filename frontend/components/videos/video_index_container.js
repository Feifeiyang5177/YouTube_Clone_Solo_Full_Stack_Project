import {connect} from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos} from '../../actions/videos_action';


const mSTP = (state) => {
  return {
    videos: Object.values(state.entities.videos),
    // currentUserId: state.session.id
    currentUser: state.session.user
  };
  
};

const mDTP = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
  
})

export default connect(mSTP, mDTP)(VideoIndex);

