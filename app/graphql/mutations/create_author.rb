module Mutations
  class CreateAuthor < Mutations::BaseMutation
    # TODO: define return fields
    # field :post, Types::PostType, null: false

    # TODO: define arguments
    # argument :name, String, required: true

    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end
    field :author, Types::AuthorType, null: false

    argument :first_name, String,required: true
    argument :surname, String, required: true
    argument :birth_year, String, required: true

    def resolve(first_name:, surname:, birth_year:)
      author = Author.new(first_name: first_name, surname: surname, birth_year: birth_year)
      if author.save
        {
          author: author,
          errors: [],
        }
      else
        {
          author: nil,
          errors: author.errors.full_messages
        }
      end
    end
  end
end
