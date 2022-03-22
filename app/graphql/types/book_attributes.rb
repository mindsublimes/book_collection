module Types
  class BookAttributes < Types::BaseInputObject
    
    argument :title, String,required: true
    argument :published_year, String,required: true
    argument :published_books_id, ID,required: true
    argument :genre, String,required: true
  end
end