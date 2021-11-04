
import {connect} from 'react-redux';
import NavBar from './nav_bar';
import { logOut } from '../../actions/session_actions';

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        currentUser: state.session.currentUser
    }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);