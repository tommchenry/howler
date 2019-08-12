class CreateMewls < ActiveRecord::Migration[5.2]
  def change
    create_table :mewls do |t|
      t.text :text
      t.integer :user_id

      t.timestamps
    end

    add_index(:mewls, :user_id)
  end
end
