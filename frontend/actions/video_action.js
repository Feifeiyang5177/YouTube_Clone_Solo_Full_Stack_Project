// import * as VideoApiUtil from '../util/video_api_util';
// export const RECEIVE_VIDEOS =  'RECEIVE_VIDEOS';
// export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
// export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';
// export const REMOVE_VIDEO = 'REMOVE_VIDEO';

// const receiveVideos = videos => ({
//     type: RECEIVE_VIDEOS,
//     videos 
// })

// const receiveVideo = video => ({
//     type: RECEIVE_VIDEO,
//     video 
// })

// const removeVideo = videoId => ({
//         type: REMOVE_VIDEO,
//         videoId
// })

// const receiveVideoErrors = errors => ({
//     type: RECEIVE_VIDEO_ERRORS,
//     errors 
// })

// export const searchVideos = query => dispatch => VideoApiUtil.searchVideos(query)
//     .then(videos => dispatch(receiveVideos(videos)));

// export const fetchVideos = () => dispatch => VideoApiUtil.fetchVideos()
//     .then(videos => dispatch(receiveVideos(videos)),
//         errors => dispatch(receiveVideoErrors(errors.responseJSON)));

// export const fetchVideo = videoId => dispatch => VideoApiUtil.fetchVideo(videoId)
//     .then(video => dispatch(receiveVideo(video)),
//         errors => dispatch(receiveVideoErrors(errors.responseJSON)));

// export const createVideo = formData => dispatch => VideoApiUtil.createVideo(formData)
//     .then(video => dispatch(receiveVideo(video)),
//         errors => dispatch(receiveVideoErrors(errors.responseJSON)));

// export const updateVideo = (formData, videoId) => dispatch => VideoApiUtil.updateVideo(formData, videoId)
//     .then(video => dispatch(receiveVideo(video)),
//         errors => dispatch(receiveVideoErrors(errors.responseJSON)));

// export const deleteVideo = videoId => dispatch => VideoApiUtil.deleteVideo(videoId)
//     .then(() => dispatch(removeVideo(videoId)),
//         errors => dispatch(receiveVideoErrors(errors.responseJSON)));