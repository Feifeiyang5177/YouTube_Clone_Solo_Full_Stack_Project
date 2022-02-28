# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  like_num   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  comment_id :integer          not null
#  user_id    :integer          not null
#  video_id   :integer          not null
#
# Indexes
#
#  index_likes_on_user_id  (user_id)
#
class Like < ApplicationRecord

  #validates :user_id, uniqueness: { scope: [:likeable_id, :likeable_type] }
  #validates :version, inclusion: { in: %w(like dislike), 
    #message: "%{value} is not a valid version, must be like or dislike"}

  #belongs_to :likeable, polymorphic: true
  belongs_to :comment,
    foreign_key: :comment_id,
    class_name: :Comment 
  
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :video,
    foreign_key: :video_id,
    class_name: :Video



  # true if liked comment is child comment
  # flase if parent comment
  
end
