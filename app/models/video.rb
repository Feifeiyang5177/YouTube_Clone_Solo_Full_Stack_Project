# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  description :text
#  title       :string           not null
#  view_count  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  creator_id  :integer          not null
#
# Indexes
#
#  index_videos_on_creator_id  (creator_id)
#
class Video < ApplicationRecord

    validates :title, :description, :creator_id, presence: true

    has_one_attached :vd
    # has_one_attached :thumbnail

    belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User 

    # has_many :comments,
    # foreign_key: :video_id,
    # class_name: :Comment  
end
