json.extract! @video, :title, :description, :view_count, :creator_id, :created_at, :updated_at
json.vdUrl url_for(@video.vd) if @video.vd.attached?

