require 'rails_helper'

RSpec.describe Segment, type: :model do
  # Association test
  # ensure a segment record belongs to a single task record
  it { should belong_to(:task) }
  # Validation test
  # ensure columns are present before saving
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:startdate) }
end
