import * as SessionUtil from '../util/session_api_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER' 
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

const receiveUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const signUp = (formUser) => dispatch => {
    SessionUtil.signUp(formUser).then(user => dispatch(receiveUser(user)))
};

export const logIn = (formUser) => dispatch => {
    SessionUtil.logIn(formUser).then(user => dispatch(receiveUser(user)))  
};

export const logOut = () => dispatch => {
    SessionUtil.logOut().then(() => dispatch(logoutUser()))
}