# == Schema Information
#
# Table name: authors
#
#  id         :integer          not null, primary key
#  birth_year :date
#  first_name :string
#  surname    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Author < ApplicationRecord
	has_many :published_books, class_name: "Book", foreign_key: "published_books_id"
end
