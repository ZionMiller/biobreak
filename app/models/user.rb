class User < ApplicationRecord
    has_many :watchlists
    has_many :stocks, through: :watchlists

    has_secure_password

    validates :first_name, :last_name, :email, :username, :zipcode, :password, presence: true
end
