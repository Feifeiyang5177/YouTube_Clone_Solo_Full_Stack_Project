# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  title       :string           not null
#  view_count  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  creator_id  :integer          not null
#
# Indexes
#
#  index_videos_on_creator_id  (creator_id)
#
class Video < ApplicationRecord
    validates :title, :description, :creator_id, :view_count, presence: true

    belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

    has_many :likes,
    foreign_key: :video_id,
    class_name: :Like

    has_many :comments,
    foreign_key: :video_id,
    class_name: :Comment

end
