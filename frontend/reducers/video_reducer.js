
import {FETCH_VIDEOS} from '../actions/videos_action'

export const VideoReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // console.log(action)
    switch (action.type) {
        case FETCH_VIDEOS:
            return action.videos
        default:
            return oldState
    }

}

export default VideoReducer