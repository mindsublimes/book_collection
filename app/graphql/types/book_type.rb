module Types
  class BookType < Types::BaseObject
    description "A Author book"
    field :id, ID, null: false
    field :title, String, null: true
    field :published_year, String, null: true
    field :published_books_id, Int, null: false
    field :genre, String, null: true
  end
end
