import {connect} from 'react-redux';
import VideoIndex from './video_index';
import { logOut } from '../../actions/session_actions';

const mSTP = (state) => ({
  currentUser: state.session.currentUser
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logOut())
})

export default connect(mSTP, mDTP)(VideoIndex);












// import VideoIndex from './video_index';

// import { connect } from 'react-redux';

// const mSTP = (state) => ({
//   chirps: Object.keys(state.entities.chirps).map(key => state.entities.chirps[key])
// });

// const mDTP = (dispatch) => ({
//   fetchChirps: () => dispatch(fetchChirps()),
//   likeChirp: id => dispatch(likeChirp(id)),
//   unLikeChirp: id => dispatch(unLikeChirp(id))
// });

// export default connect(mSTP, mDTP)(VideoIndex);