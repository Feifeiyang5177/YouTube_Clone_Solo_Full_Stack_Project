import {connect} from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos} from '../../actions/videos_action';
import { thunkFetchAllUsers } from "../../actions/user_actions";


const mSTP = (state) => {
  return {
    videos: Object.values(state.entities.videos),
    // filter the search result by video id 
    currentUser: state.session.currentUser,
    
  };
  
};

const mDTP = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mSTP, mDTP)(VideoIndex);

