class CreateCurrentTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :current_tasks do |t|
      t.string :code
      t.references :task, foreign_key: true

      t.timestamps
    end
  end
end
