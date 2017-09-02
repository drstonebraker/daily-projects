# == Schema Information
#
# Table name: subs
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  description  :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  moderator_id :integer
#

class Sub < ApplicationRecord
  validates :title, :moderator, presence: true # need to validate belongs_to?  has_many?
  validates :title, uniqueness: true

  belongs_to :moderator,
    primary_key: :id,
    foreign_key: :moderator_id,
    class_name: :User

  has_many :post_subs
  
  has_many :posts,
  through: :post_subs,
  source: :post
end
