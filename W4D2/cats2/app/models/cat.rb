class Cat < ApplicationRecord
  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: { in: %w(orange calico black grey tiger white),
    message: "%{value} is not a valid color" }
  validates :sex, inclusion: {in: %w(M F), message: "%{value} must be M or F"}


  def age
    (Date.today - birth_date) / 365
  end
end
