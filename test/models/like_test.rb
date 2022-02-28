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
require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
