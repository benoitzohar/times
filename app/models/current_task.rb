class CurrentTask < ApplicationRecord
  belongs_to :task

  before_create :do_before_create
    def do_before_create
      self.created_at = Time.now
      self.updated_at = Time.now
    end
end
