module Types
  class CreateAuthorInputType < BaseInputObject
    description ""
    argument :id, ID, required: true
    argument :first_name, String, required: true
    argument :surname, String, required: true
    argument :birth_year, String, required: true
  end
end
