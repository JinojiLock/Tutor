class RenameTypeColumnInUsers < ActiveRecord::Migration[7.2]
  def change
        rename_column :users, :type, :lesson_type
  end
end
