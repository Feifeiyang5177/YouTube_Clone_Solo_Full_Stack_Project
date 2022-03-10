import * as likeAPIUtil from "../util/like_api_util";

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";

export const CREATE_LIKE = "CREATE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";



// const receiveVideoLike = (like) => ({
//   type: RECEIVE_VIDEO_LIKE,
//   like,
// //   version: like.version,
//   videoId: like.videoId,
//   likerId: like.userId,
// });


export const receiveLikes = (likes) => ({
  type: RECEIVE_ALL_LIKES,
  likes,
});

export const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like,
});

export const createLike = (like) => ({
  type: CREATE_LIKE,
  like,
});

export const deleteLike = (likeId) => ({
  type: DELETE_LIKE,
  likeId,
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

// const removeLike = (like) => ({
//   type: REMOVE_VIDEO_LIKE,
//   like,
//   videoId: like.videoId,
//   likerId: like.userId,
// });


export const thunkFetchLikes = () => (dispatch) => {
  return likeAPIUtil
    .apiReceiveAllLikes()
    .then((likes) => dispatch(receiveLikes(likes)));
}; 

export const thunkFetchLike = (likeId) => (dispatch) =>
  likeAPIUtil
    .apiReceiveLike(likeId)
    .then((like) => dispatch(receiveLike(like)));


export const thunkCreateLike = (like) => (dispatch) => {
  // debugger
  return likeAPIUtil.apiCreateLike(like).then(
    (like) => dispatch(createLike(like))
  );
};

export const thunkDeleteLike = (likeId) => (dispatch) =>
  likeAPIUtil
    .apiDeleteLike(likeId)
    .then(() => dispatch(deleteLike(likeId)));



