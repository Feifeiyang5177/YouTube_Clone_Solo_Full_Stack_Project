import * as LikesUtil from "../util/like_api_util";

export const RECEIVE_VIDEO_LIKE = "RECEIVE_VIDEO_LIKE";
export const REMOVE_VIDEO_LIKE = "REMOVE_VIDEO_LIKE";



const receiveVideoLike = (like) => ({
  type: RECEIVE_VIDEO_LIKE,
  like,
//   version: like.version,
  videoId: like.videoId,
  likerId: like.userId,
});

const removeVideoLike = (like) => ({
  type: REMOVE_VIDEO_LIKE,
  like,
  videoId: like.videoId,
  likerId: like.userId,
});


export const createLike = (like) => dispatch => {
  return LikesUtil.createLike(like).then((like) => dispatch(receiveVideoLike(like)))
};


export const deleteLike = (likeId) => (dispatch) => {
  return LikesUtil.deleteLike(likeId).then((like) => {
    dispatch(removeVideoLike(like));
  });
};
