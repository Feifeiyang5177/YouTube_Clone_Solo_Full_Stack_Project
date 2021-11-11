
import * as SessionUtil from '../util/session_api_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; 
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


export const receiveUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})
export const logoutUser = () => ({
    type: LOGOUT_CURRENT_USER
});
export const signUp = (formUser) => dispatch => {

    return SessionUtil.signUp(formUser).then((user) => dispatch(receiveUser(user)))
};

export const logIn = (formUser) => dispatch => {
    return SessionUtil.logIn(formUser)
    .then(user => dispatch(receiveUser(user)))
};

export const logOut = () => dispatch => {
    return SessionUtil.logOut()
    .then(() => dispatch(logoutUser()))
};





