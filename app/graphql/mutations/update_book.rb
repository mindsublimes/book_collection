module Mutations
  class UpdateBook < Mutations::BaseMutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false

    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method
    field :book, Types::BookType, null: false

    argument :id, ID, required: true
    argument :attributes, Types::BookAttributes, required: true
    def resolve(id:, attributes:)
      book = Book.find(id)
      if book.update(attributes.to_h)
        { book: book }
      else
        raise GraphQL::ExecutionError, book.errors.full_messages.join(", ")
      end
    end
  end
end
