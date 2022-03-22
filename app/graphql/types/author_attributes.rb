module Types
  class AuthorAttributes < Types::BaseInputObject
    
    argument :first_name, String,required: true
    argument :surname, String, required: true
    argument :birth_year, String, required: true
  end
end