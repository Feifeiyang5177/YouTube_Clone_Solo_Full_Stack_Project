
import {connect} from 'react-redux';
import NavBar from './nav_bar';
import { logOut } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    return {
      currentUser: state.session.currentUser,
      videos: Object.values(state.entities.videos)
    };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logOut()),
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);