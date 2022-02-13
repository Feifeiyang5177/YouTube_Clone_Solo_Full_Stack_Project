import * as VideoUtil from '../util/video_api_util'
export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const FETCH_VIDEO = 'FETCH_VIDEO';
export const ADD_VIDEO_VIEWS = "ADD_VIDEO_VIEWS";

export const receiveVideos = (videos) => ({
    type: FETCH_VIDEOS,
    videos
})

export const receiveVideo = (video) => ({
    type: FETCH_VIDEO,
    video
})

const addVideoViews = (videoId) => ({
  type: ADD_VIDEO_VIEWS,
  videoId,
});

export const fetchVideos = () => dispatch => {
    return (
        VideoUtil.fetchVideos().then((videos) => {  
            return dispatch(receiveVideos(videos))})
    )
}

export const fetchVideo = (videoId) => dispatch => {
    return (
        VideoUtil.fetchVideo(videoId).then((video) => dispatch(receiveVideo(video)))
    )
} 

export const addViews = (videoId) => (dispatch) =>
  VideoUtil.addViews(videoId).then(dispatch(addVideoViews(videoId)));
