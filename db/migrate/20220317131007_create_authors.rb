class CreateAuthors < ActiveRecord::Migration[5.0]
  def change
    create_table :authors do |t|
      t.string :first_name
      t.string :surname
      t.date :birth_year
      t.timestamps
    end
  end
end
