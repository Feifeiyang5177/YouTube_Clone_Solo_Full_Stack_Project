class ChangeUserSessionPasswordDigest < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :password_digest
    add_column :users, :password_digest, :string

    remove_column :users, :session_token
    add_column :users, :session_token, :string

    remove_column :users, :email
    add_column :users, :email, :string
  end
end
