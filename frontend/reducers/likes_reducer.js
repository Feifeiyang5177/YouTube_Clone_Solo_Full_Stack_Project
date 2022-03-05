
import {
  RECEIVE_VIDEO_LIKE,
  REMOVE_VIDEO_LIKE 
} from "../actions/comment_actions";

const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_VIDEO_LIKE:
      nextState[action.like.id] = action.like;
      return nextState;
    case REMOVE_VIDEO_LIKE:
      delete nextState[action.likeId];
      return nextState;
    default:
      return oldState;
  }
};
export default likesReducer;






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
