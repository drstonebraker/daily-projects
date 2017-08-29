require 'spec_helper'
require 'rails_helper'

feature 'the goals' do

  feature 'creation' do

    scenario 'has a page for creating new goals' do
      visit new_goal_url
      expect(page).to have_content 'New Goal'
    end

    scenario 'can be accessed from public goals index page'
    scenario 'can be accessed from private goals index page'

    scenario 'can be completed successfully'

    scenario 'redirects user to private index page' #do
    #   expect(page).to have_content 'New Goal'
    # end

    scenario 'redirects user to personal index page'
    scenario 'cannot be completed unless logged in'


  end

  feature 'making goals public or private' do
    scenario 'can be made private'
    scenario 'can be made public'
  end

  feature 'marking goals as completed/uncompleted' do
    scenario 'can be marked as completed'
    scenario 'can be marked as uncompleted'
  end


end
