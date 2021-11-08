import { combineReducers } from 'redux';
import VideoReducer from './video_reducer';

const entities = combineReducers({
    videos: VideoReducer
})

export default entities
