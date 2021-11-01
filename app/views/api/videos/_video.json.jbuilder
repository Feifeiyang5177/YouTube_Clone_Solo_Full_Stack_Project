json.extract! video, :title, :description, :view_count, :creator_id
json.views video.view_count
json.likes video.likes.count 
json.comments video.comments



