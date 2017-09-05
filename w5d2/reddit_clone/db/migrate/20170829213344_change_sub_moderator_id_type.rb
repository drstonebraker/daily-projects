class ChangeSubModeratorIdType < ActiveRecord::Migration[5.1]
  def change
    remove_column :subs, :moderator_id
    add_column :subs, :moderator_id, :integer
  end
end
