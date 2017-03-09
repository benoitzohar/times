class Task < ApplicationRecord
    # model association
    has_many :segments, dependent: :destroy

    # validations
    validates_presence_of :title

    before_create :do_before_create
      def do_before_create
        self.code = 'TODO'
        self.created_at = Time.now
        self.updated_at = Time.now
      end

   def update_duration
       self.duration = 1234
   end
end
