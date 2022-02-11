
import * as SessionUtil from '../util/session_api_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; 
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"; 

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


export const receiveUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser 
})

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users,
});

export const logoutUser = () => ({
    type: LOGOUT_CURRENT_USER
});


export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})


export const signUp = (formUser) => dispatch => {

    return SessionUtil.signUp(formUser).then((user) => dispatch(receiveUser(user)),
    error => { dispatch(receiveErrors(error.responseJSON))})

};

export const logIn = (formUser) => dispatch => {
    return SessionUtil.logIn(formUser)
    .then(user => dispatch(receiveUser(user)),
    error => dispatch(receiveErrors(error.responseJSON))
    )
};

export const logOut = () => dispatch => {
    return SessionUtil.logOut()
    .then(() => dispatch(logoutUser()))
};

export const thunkFetchAllUsers = () => (dispatch) => {
    debugger
  return SessionUtil
  .apiFetchAllUsers().then((users) =>
    dispatch(receiveAllUsers(users))
  );
};





