require 'spec_helper'
require 'rails_helper'

feature 'the goals' do

  feature 'creation' do

    scenario 'has a page for creating new goals' do
      visit new_goal_url
      expect(page).to have_content 'New Goal'
    end

    scenario 'redirects user to personal index page' do
      visit new_goal_url

      expect(page).to have_content 'New Goal'
    end

  end

end
