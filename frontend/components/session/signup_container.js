import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signUp, logIn, clearErrors} from '../../actions/session_actions';


const mSTP = state => ({
    errors: state.errors.session
    // console.log(state)
});

const mDTP = dispatch => ({
    action: user => dispatch(signUp(user)),
    login: user => dispatch(logIn(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SignupForm);