# == Schema Information
#
# Table name: comments
#
#  id           :bigint           not null, primary key
#  body         :text             not null
#  like_num     :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  commenter_id :integer          not null
#  video_id     :integer          not null
#
# Indexes
#
#  index_comments_on_video_id  (video_id)
#
class Comment < ApplicationRecord
validates :commenter_id, :video_id, :body, presence: true

  belongs_to :commenter,
  foreign_key: :commenter_id,
  class_name: :User

  belongs_to :video,
  foreign_key: :video_id,
  class_name: :Video

end
