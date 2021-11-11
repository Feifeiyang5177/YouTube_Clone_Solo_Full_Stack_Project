@videos.each do |video|
    json.set! video.id do
    json.extract! video, :id, :title, :description, :creator_id, :view_count
    json.vdUrl url_for(video.vd) if video.vd.attached?
    end 
end 
