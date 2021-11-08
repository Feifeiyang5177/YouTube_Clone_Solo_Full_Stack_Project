json.extract! @video, :title, :description, :view_count, :creator_id


# json.extract! @video, :id, :title, :description, :creator_id, :view_count
#     if @video.thumbnail.attached?
#         json.thumbnailUrl url_for(@video.thumbnail)
#         # thumbnail Url is the key in the POJO that being sent to the frontend 
#         # aws: url_for 
#     end 