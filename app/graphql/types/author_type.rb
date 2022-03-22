module Types
  class AuthorType < Types::BaseObject
    description "An Author book"
    field :id, ID, null: false
    field :first_name, String, null: true
    field :surname, String, null: true
    field :birth_year, String, null: true
    field :publishedBooks, [Types::BookType], null: true
  end
end
