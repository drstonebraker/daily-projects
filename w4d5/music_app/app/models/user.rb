# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true

  before_validation :ensure_session_token

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.generate_unique_session_token
    session_token = generate_session_token
    while User.exists?(session_token: session_token)
      session_token = generate_session_token
    end
    session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_unique_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_unique_session_token
  end
end
