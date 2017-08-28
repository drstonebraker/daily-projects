# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

FactoryGirl.define do
  factory :user do
    password = 'password'
    password password
    username { Faker::Internet.user_name }
    password_digest BCrypt::Password.create(password)

    factory :unsaved_user do
      username { Faker::Internet.user_name }
    end

    factory :invalid_password do
      password 'notrealpassword'
    end
  end
end
