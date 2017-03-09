class Segment < ApplicationRecord
  belongs_to :task

  # validation
validates_presence_of :title, :startdate

before_create :do_before_create
  def do_before_create
    self.created_at = Time.now
    self.updated_at = Time.now
  end
end
