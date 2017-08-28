require 'spec_helper'
require 'rails_helper'

feature 'the signup process' do
  scenario 'has a new user page' do
    visit new_user_url
    expect(page).to have_content 'New User'
  end

  feature 'signing up a user' do

    scenario 'shows username on the homepage after signup' do
      visit new_user_url
      fill_in 'Username', with: 'drew'
      fill_in 'Password', with: 'password'
      click_button('Sign Up')
      expect(page).to have_content 'drew'
    end

  end
end

feature 'logging in' do
  scenario 'shows username on the homepage after login' do
    FactoryGirl.create(:user, username: 'drew', password: 'password')
    visit new_session_url
    expect(page).to have_content 'Log In'
    fill_in 'Username', with: 'drew'
    fill_in 'Password', with: 'password'
    click_button('Log In')
    expect(page).to have_content 'drew'
  end

end

feature 'logging out' do
  scenario 'begins with a logged out state' do
    visit new_session_url
    expect(page).to have_content 'Log In'
  end

  scenario 'doesn\'t show username on the homepage after logout' do
    FactoryGirl.create(:user, username: 'drew', password: 'password')
    visit new_session_url
    fill_in 'Username', with: 'drew'
    fill_in 'Password', with: 'password'
    click_button('Log In')
    click_button('Log Out')
    expect(page).to_not have_content 'drew'
  end

end
