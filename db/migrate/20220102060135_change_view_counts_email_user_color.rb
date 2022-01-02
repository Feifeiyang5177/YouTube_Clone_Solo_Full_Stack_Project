class ChangeViewCountsEmailUserColor < ActiveRecord::Migration[5.2]
  def change
    
    add_column :users, :color, :string
    remove_column :videos, :view_count
    add_column :videos, :view_count, :integer, default: 0
  end

  add_index :videos, :title
  add_index :likes, :user_id
end
