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

require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'validations' do
    subject(:user) { FactoryGirl.build(:user) }

    it { should validate_presence_of(:username)}
    it { should validate_presence_of(:password_digest)}
    it { should validate_presence_of(:session_token)}
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe '::find_by_credentials' do
    context 'with invalid arguments' do
      it 'returns nil when username not found' do
        user = FactoryGirl.build(:unsaved_user)
        expect(User.find_by_credentials(user.username, user.password)).to be nil
      end
      it 'returns nil when password is invalid' do
        user = FactoryGirl.create(:invalid_password)
        expect(User.find_by_credentials(user.username, user.password)).to be nil
      end
    end
    context 'with valid arguments' do
      it 'returns user' do
        user = FactoryGirl.create(:user)
        expect(User.find_by_credentials(user.username, user.password)).to eq user
      end
    end
  end


  describe 'after_initialize' do
    it 'should create a session_token' do
      user = FactoryGirl.build(:user)
      expect(user.session_token).to be_truthy
    end
  end

end
