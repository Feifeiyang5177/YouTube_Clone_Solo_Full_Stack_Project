# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  description :text
#  title       :string           not null
#  view_count  :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  creator_id  :integer          not null
#
# Indexes
#
#  index_videos_on_creator_id  (creator_id)
#  index_videos_on_title       (title)
#
class Video < ApplicationRecord

    validates :title, :description, :creator_id, presence: true

    has_one_attached :vd

    has_many :likes,
    foreign_key: :video_id,
    class_name: :Likes  

    has_many :comments,
    foreign_key: :video_id,
    class_name: :Comment,
    dependent: :destroy
    
   
    belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User 

    def num_likes
    self.likes.where(version: "like").length
    end

    def num_dislikes
    self.likes.where(version: "dislike").length
    end

    

 
end
