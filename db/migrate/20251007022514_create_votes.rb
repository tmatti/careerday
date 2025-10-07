class CreateVotes < ActiveRecord::Migration[8.0]
  def change
    create_table :votes do |t|
      t.string :career
      t.string :name
      t.string :gender
      t.integer :grade
      t.timestamps
    end
  end
end
