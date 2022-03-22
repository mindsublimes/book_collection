class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :title
      t.references :published_books, index: true, foreign_key: {to_table: "authors"}
      t.date :published_year
      t.string :genre
      t.timestamps
    end
  end
end
