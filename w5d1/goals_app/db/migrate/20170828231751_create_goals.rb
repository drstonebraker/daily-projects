class CreateGoals < ActiveRecord::Migration[5.1]
  def change
    create_table :goals do |t|
      t.string :title
      t.boolean :completed
      t.boolean :public
      t.integer :user_id

      t.timestamps
    end
  end
end
