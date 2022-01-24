import React from "react";
import { connect } from "react-redux";
import { signUp, logIn, clearErrors } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import SignupForm from "./signup_form";
 
const mSTP = (state) => {
  return {
    errors: state.errors.sessionErrors,
    
  };
};


const mDTP = (dispatch) => ({
  signUp: (formUser) => dispatch(signUp(formUser)),
  login: (formUser) => dispatch(logIn(formUser)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mSTP, mDTP)(SignupForm);
