export const apiCreateComment = (comment) => {
  return $.ajax({
    url: `api/comments`,
    method: "POST",
    data: { comment },
  });
};

export const apiReceiveAllComments = () => {
  return $.ajax({
    url: `api/comments`,
  });
};
export const apiReceiveComment = (commentId) => {
  return $.ajax({
    url: `api/comments/${commentId}`,
  });
};
export const apiUpdateComment = (comment) =>
  $.ajax({
    url: `api/comments/${comment.id}`,
    method: "PATCH",
    data: { comment },
  });

export const apiDeleteComment = (commentId) =>
  $.ajax({
    url: `api/comments/${commentId}`,
    method: "DELETE",
  });
