class CreateSegments < ActiveRecord::Migration[5.0]
  def change
    create_table :segments do |t|
      t.references :task, foreign_key: true
      t.string :title
      t.datetime :startdate
      t.bigint :duration
      t.datetime :created_at, default: -> { 'CURRENT_TIMESTAMP' }
      t.datetime :updated_at, default: -> { 'CURRENT_TIMESTAMP' }

      t.timestamps
    end
  end
end
