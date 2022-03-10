export const apiCreateLike = (like) => {
  return $.ajax({
    method: "POST",
    url: "api/likes",
    data: { like },
  });
};

export const apiDeleteLike = (likeId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/likes/${likeId}`,
  });
};

export const apiReceiveAllLikes = () => {
  return $.ajax({
    url: `api/likes`,
  });
};

export const apiReceiveLike = (likeId) => {
  return $.ajax({
    url: `api/likes/${likeId}`,
  });
};
