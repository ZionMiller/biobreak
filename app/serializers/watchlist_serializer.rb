class WatchlistSerializer < ActiveModel::Serializer
  attributes :id, :tickers
  has_one :user
end
