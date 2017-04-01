require 'rails_helper'

RSpec.describe CurrentTask, type: :model do
    # Association test
    # ensure a segment record belongs to a single task record
    it { should belong_to(:task) }
end
