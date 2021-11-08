import * as VideoUtil from '../util/video_api_util'
export const FETCH_VIDEOS = 'FETCH_VIDEOS'


export const receiveVideos = (videos) => ({
    type: FETCH_VIDEOS,
    videos
})

export const fetchVideos = () => dispatch => {
    return (
        VideoUtil.fetchVideos().then((videos) => dispatch(receiveVideos(videos)))
    
    )
}

