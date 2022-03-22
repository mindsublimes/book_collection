module Mutations
  class CreateBook < Mutations::BaseMutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false

    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end
    field :book, Types::BookType, null: false
    argument :title, String,required: true
    argument :published_year, String,required: true
    argument :published_books_id, ID,required: true
    argument :genre, String,required: true

    def resolve(title:, published_year:, published_books_id:, genre:)
      book = Book.new(title: title, published_year: published_year, published_books_id: published_books_id, genre: genre)
      if book.save
        {
          book: book,
          errors: [],
        }
      else
        {
          book: nil,
          errors: book.errors.full_messages
        }
      end
    end


  end
end
