class User < ApplicationRecord
    has_many :watchlist_stocks
    has_many :stocks, through: :watchlist_stocks

    has_secure_password

    validates :first_name, :last_name, :email, :zipcode, :password, presence: true
end
