class Stock < ApplicationRecord
  has_many :watchlists
  has_many :users, through: :watchlists

  validates :ticker, presence: true
end
