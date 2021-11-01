class ChangeDigestInUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :password_degest
    add_column :users, :password_digest, :string, null: false
  end
end
