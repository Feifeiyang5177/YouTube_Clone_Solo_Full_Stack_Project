json.extract! @video, :title, :description, :view_count, :creator_id
json.vdUrl url_for(@video.vd) if @video.vd.attached?

