import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signUp, logIn, clearErrors} from '../../actions/session_actions';


const mSTP = state => {
    // console.log(state.err)
    return {errors: state.errors.session
    }
};

const mDTP = dispatch => ({
    action: user => dispatch(signUp(user)),
    login: user => dispatch(logIn(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SignupForm);