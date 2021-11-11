import { combineReducers } from 'redux';
import VideoReducer from './video_reducer';
import usersReducer from './users_reducer';

const entities = combineReducers({
    videos: VideoReducer,
    users: usersReducer
})

export default entities
