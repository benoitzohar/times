require 'rails_helper'

RSpec.describe Task, type: :model do
    # Association test
    # ensure Task model has a 1:m relationship with the Segment model
    it { should have_many(:segments).dependent(:destroy) }
    # Validation tests
    # ensure column are present before saving
    it { should validate_presence_of(:title) }
end
