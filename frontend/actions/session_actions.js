import * as SessionUtil from '../util/session_api_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'; 
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const receiveUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})
export const logoutUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})


export const signUp = (formUser) => dispatch => SessionUtil.signUp(formUser)
    
    .then(user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
    );


export const logIn = (formUser) => dispatch => {
    return SessionUtil.logIn(formUser)
    .then(user => dispatch(receiveUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)) )
};

export const logOut = () => dispatch => {
    return SessionUtil.logOut()
    .then((user) => dispatch(logoutUser()))
}