import {connect} from 'react-redux';
import { logOut } from '../../actions/session_actions';
import SideBar from './side_bar';

const mSTP = (state) => {

    return {
        currentUser: state.session.currentUser
    }
};

const mDTP = (dispatch) => ({
  logout: () => dispatch(logOut())
})

export default connect(mSTP, mDTP)(SideBar);