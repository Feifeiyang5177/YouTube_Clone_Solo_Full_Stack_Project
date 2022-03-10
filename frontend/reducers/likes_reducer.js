import {
  RECEIVE_ALL_LIKES,
  CREATE_LIKE,
  DELETE_LIKE,
  RECEIVE_LIKE,
} from "../actions/likes_action";

const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case CREATE_LIKE:
      nextState[action.like.id] = action.like;
      return nextState;
    case RECEIVE_ALL_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      nextState[action.like.id] = action.like;
      return nextState;
    case DELETE_LIKE:
      delete nextState[action.likeId];
      return nextState;
    default:
      return oldState;
  }
};
export default likesReducer;


// import {
//   RECEIVE_VIDEO_LIKE,
//   REMOVE_VIDEO_LIKE 
// } from "../actions/likes_action";

// const likesReducer = (oldState = {}, action) => {
//   Object.freeze(oldState);
//   let nextState = Object.assign({}, oldState);
//   switch (action.type) {
//     case RECEIVE_VIDEO_LIKE:
//       nextState[action.like.id] = action.like;
//       return nextState;
//     case REMOVE_VIDEO_LIKE:
//       delete nextState[action.likeId];
//       return nextState;
//     default:
//       return oldState;
//   }
// };
// export default likesReducer;






// const likesCount = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     case "RESET":
//       return (state = 0);
//     default:
//       return state;
//   }
// };
// export default likesCount;
