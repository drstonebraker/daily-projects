# == Schema Information
#
# Table name: answer_choices
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  option      :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class AnswerChoice < ApplicationRecord
end
