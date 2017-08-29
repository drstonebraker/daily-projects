module AuthFeaturesHelper

  def login_as(user)
    visit new_session_url
    fill_in 'Username', with: user.username
    fill_in 'Password', with: 'password'
    click_button('Log In')
  end

end
