import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import Login from './login_form';

const mDTP = dispatch => ({
    
  login: formUser => dispatch(logIn(formUser)),
});

export default connect(null, mDTP)(Login);