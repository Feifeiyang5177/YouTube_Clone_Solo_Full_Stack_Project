# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  color           :string
#  email           :string
#  password_digest :string
#  session_token   :string
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_session_token  (session_token)
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
    attr_reader :password

    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    #validates :email, formate: { with: URI::MailTo::EMAIL_REGEXP }
    after_initialize :ensure_session_token
    
    has_many :videos,
    foreign_key: :creator_id,
    class_name: :Video
    

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user 
        user.is_password?(password) ? user : nil 
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
end



