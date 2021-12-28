import { connect } from 'react-redux';
import { logIn, clearErrors } from "../../actions/session_actions";
import Login from './login_form';

const mSTP = (state) => {
  return {
    errors: state.errors.sessionErrors,
    // formLink: <Link to="/login">Sign in instead</Link>,
  };
};

const mDTP = (dispatch) => ({
  login: (formUser) => dispatch(logIn(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(Login);