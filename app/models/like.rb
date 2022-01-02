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