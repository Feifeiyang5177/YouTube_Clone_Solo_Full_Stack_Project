import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullSession =  Object.freeze({
  id: null
}); 

export default (oldState = _nullSession, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser
       return Object.assign({}, { currentUser });

    case LOGOUT_CURRENT_USER:
      return _nullSession;
      
    default:
      return oldState;
  }
};

