import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_ALL_USERS,
} from "../actions/session_actions";

const _nullSession =  Object.freeze({
  id: null
}); 

export default (oldState = _nullSession, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, { currentUser });

    case LOGOUT_CURRENT_USER:
      return _nullSession;
      
    case RECEIVE_ALL_USERS:
      return action.users

    default:
      return oldState;
  }
};

