@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :creator_id, :view_count, :created_at, :updated_at
        json.vdUrl url_for(video.vd) if video.vd.attached?
        #json.numLikes video.num_likes
        #json.numDislikes video.num_dislikes
        #json.uploadedAt time_ago_in_words(video.created_at)
    end 
end 

# @videos.each do |video|
#   json.set! video.id do
#     json.partial! "api/videos/video", video: video
#     json.vdUrl url_for(video.vd) if video.vd.attached?
#   end
# end 

