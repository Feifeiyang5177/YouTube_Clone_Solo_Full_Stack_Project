class ChangeCreatorToUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :creator_id
    add_column :likes, :user_id, :integer, null: false

  end
end
