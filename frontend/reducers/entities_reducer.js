import { combineReducers } from 'redux';
import VideoReducer from './video_reducer';
import usersReducer from './users_reducer';
import commentsReducer from "./comments_reducer";


const entities = combineReducers({
  videos: VideoReducer,
  users: usersReducer,
  comments: commentsReducer,
  
});

export default entities 
