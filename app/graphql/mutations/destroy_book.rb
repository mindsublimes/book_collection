module Mutations
  class DestroyBook < Mutations::BaseMutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false

    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end

    field :id, ID, null: true

    argument :id, ID, required: true

    def resolve(id:)
      book = Book.find(id)
      book.destroy
      {
        id: id,
      }
    end
  end
end
