import {connect} from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos} from '../../actions/videos_action';
import { thunkFetchAllUsers } from "../../actions/user_actions";


const mSTP = (state) => {
  return {
    videos: Object.values(state.entities.videos),
    currentUser: state.session.currentUser,
    // users: state.entities.users
  };
  
};

const mDTP = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
  // fetchUsers: () => dispatch(thunkFetchAllUsers())
});

export default connect(mSTP, mDTP)(VideoIndex);

