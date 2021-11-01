# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  comment_id :integer          not null
#  user_id    :integer          not null
#  video_id   :integer          not null
#
class Like < ApplicationRecord
    validates :video_id, :creator_id, :comment_id, presence: true

    belongs_to :user,
    foreign_key: :creator_id, 
    class_name: :User
    #for subscribe

    belongs_to :comment,
    foreign_key: :comment_id,
    class_name: :comment

    belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video

end
