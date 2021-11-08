class ChangeVideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :description
    remove_column :videos, :view_count
    
    add_column :videos, :description, :text
    add_column :videos, :view_count, :integer
  end
end
