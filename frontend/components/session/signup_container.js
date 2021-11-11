
import { connect } from 'react-redux';
import { signUp, logIn } from '../../actions/session_actions';
import { Link } from "react-router-dom";
import SignupForm from './signup_form';

// const mSTP = (state) => {
//   return {
//     formLink: <Link to="/login">Sign in instead</Link>,
//   };
// };

const mDTP = dispatch => ({
  signUp: formUser => dispatch(signUp(formUser)),
  login: (formUser) => dispatch(logIn(formUser))
});

export default connect(null, mDTP)(SignupForm);