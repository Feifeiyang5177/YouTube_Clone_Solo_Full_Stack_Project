class ChangeComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :commenter_id, :integer, null: false
  end
    add_index :comments, :video_id
end
