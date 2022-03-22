module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    field :books, [BookType], null: true do
      argument :published_books_id, ID, required: true
    end

    def books(published_books_id:)
      debugger
      Book.where(published_books_id: published_books_id)
    end

    field :authors, [AuthorType], null: true
    def authors
      Author.all
    end

    field :author, AuthorType , null: true do
      argument :id, ID, required: true
    end

    def author(id:)
      Author.find(id)
    end
  end
end
