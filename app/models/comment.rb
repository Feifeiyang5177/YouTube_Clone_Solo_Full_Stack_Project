# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  video_id   :integer          not null
#
class Comment < ApplicationRecord

    validates :video_id, :body, presence: true

    belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video

    has_many :likes,
    foreign_key: :comment_id,
    class_name: :Comment
end
