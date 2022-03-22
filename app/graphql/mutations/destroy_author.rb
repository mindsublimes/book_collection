module Mutations
  class DestroyAuthor < Mutations::BaseMutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false

    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method

    field :id, ID, null: true

    argument :id, ID, required: true

    def resolve(id:)
      author = Author.find(id)
      author.destroy
      {
        id: id,
      }
    end
  end
end
