class Stock < ApplicationRecord

    has_many :watchlist_stocks
    has_many :users, through: :watchlist_stocks

end
