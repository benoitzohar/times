class Task < ApplicationRecord
    # model association
    has_many :segments, dependent: :destroy

    # validations
    validates_presence_of :title

    before_create :do_before_create
      def do_before_create
        self.created_at = Time.now
        self.updated_at = Time.now
      end

   def update_duration
       duration = self.segments.sum(:duration)
       update_column(:duration, duration)
   end
end
