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
require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
