class CatRentalRequest < ApplicationRecord
  validates :cat_id, :start_date, :end_date, :status, presence: true
  validates :status, inclusion: { in: %w(PENDING APPROVED DENIED),
    message: "%{value} is not a valid status" }
  validate :does_not_overlap_approved_request

  belongs_to :cat,
    primary_key: :id,
    foreign_key: :cat_id,
    class_name: :Cat

  def overlapping_approved_requests
    CatRentalRequest.
      where(<<-SQL, cat_id, start_date, end_date, start_date, end_date)
        cat_rental_requests.status = 'APPROVED' AND
        cat_rental_requests.cat_id = ? AND
        (cat_rental_requests.start_date
        BETWEEN ? AND ?
        OR cat_rental_requests.end_date
        BETWEEN ? AND ?)
      SQL
  end

  private

  def does_not_overlap_approved_request
    unless overlapping_approved_requests.empty?
      errors[:base] << 'date range overlaps with an existing approved request'
    end
  end
end
