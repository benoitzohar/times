class AddCurrentStatusToTask < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :current, :boolean
  end
end
