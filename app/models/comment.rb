class Comment < ApplicationRecord
validates :commenter_id, :video_id, :body, presence: true

  belongs_to :commenter,
  foreign_key: :commenter_id,
  class_name: :User

  belongs_to :video,
  foreign_key: :video_id,
  class_name: :Video

end