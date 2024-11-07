class CreateUsers < ActiveRecord::Migration[7.2]
  def change
    create_table :users do |t|
      t.string :first_name, null:false, limit: 32
      t.string :last_name, null:false, limit: 64
      t.integer :number_class, null:false
      t.string :lesson, null:false
      t.date :record_date, null:false
      t.string :email
      t.string :number_phone, null:false
      t.string :time_start, null: false, limit: 5
      t.string :time_end, null: false, limit: 5

      t.timestamps
    end
  end
end
