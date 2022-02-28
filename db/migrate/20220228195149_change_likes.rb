class ChangeLikes < ActiveRecord::Migration[5.2]
  def change
     add_column :likes, :like_num, :integer
     add_column :comments, :like_num, :integer
  end
end
