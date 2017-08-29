module GoalFeaturesHelper

  def create_goal(public = false, n = nil)
    login_as('drew')
    visit new_goal_url
    fill_in 'Title', with: "This is my goal #{n}"
    check 'Public' if public
    click_button 'Submit Goal'
  end

end
