import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signUp} from '../../actions/session_actions';


const mDTP = dispatch => ({
    action: user => dispatch(signUp(user))
});

export default connect(null, mDTP)(SignupForm);