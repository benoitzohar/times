class AddEndDateToSegments < ActiveRecord::Migration[5.0]
  def change
    add_column :segments, :enddate, :datetime
  end
end
