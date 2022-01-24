json.extract! @video, :title, :description, :view_count, :creator_id, :created_at, :updated_at
json.vdUrl url_for(@video.vd) if @video.vd.attached?


#json.numLikes video.num_likes
#json.numDislikes video.num_dislikes
#json.uploadedAt time_ago_in_words(video.created_at)

#json.partial! "api/videos/video", video: @video
#json.vdUrl url_for(@video.vd) if @video.vd.attached?

