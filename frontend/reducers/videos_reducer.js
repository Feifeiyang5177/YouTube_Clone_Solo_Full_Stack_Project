import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../actions/video_action';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_VIDEO:
            nextState[action.video.id] = action.video
            return nextState;
        case RECEIVE_VIDEOS:
            return action.videos;
        case REMOVE_VIDEO:
            delete nextState[action.videoId];
            return nextState;
        default:
            return state;
    }
}

export default videosReducer