
# json.extract! @like, :id, :user_id, :video_id, :comment_id

json.partial! "api/likes/like", like: @like
json.user @user.user