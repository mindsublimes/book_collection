module Mutations
  class UpdateAuthor < Mutations::BaseMutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false

    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method
    field :author, Types::AuthorType, null: false

    argument :id, ID, required: true
    argument :attributes, Types::AuthorAttributes, required: true
    def resolve(id:, attributes:)
      author = Author.find(id)
      if author.update(attributes.to_h)
        { author: author }
      else
        raise GraphQL::ExecutionError, author.errors.full_messages.join(", ")
      end
    end
  end
end
