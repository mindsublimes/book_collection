# == Schema Information
#
# Table name: books
#
#  id                 :integer          not null, primary key
#  genre              :string
#  published_year     :date
#  title              :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  published_books_id :integer
#
# Indexes
#
#  index_books_on_published_books_id  (published_books_id)
#
# Foreign Keys
#
#  fk_rails_...  (published_books_id => authors.id)
#
class Book < ApplicationRecord
	belongs_to :author, foreign_key: "published_books_id", class_name: "Author"
end
