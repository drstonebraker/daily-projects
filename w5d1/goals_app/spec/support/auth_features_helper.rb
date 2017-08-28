module AuthFeaturesHelper

  def login_as(username)
    visit new_session_url
    fill_in 'Username', with: username
    fill_in 'Password', with: 'password'
    click_button('Log In')
  end

end
