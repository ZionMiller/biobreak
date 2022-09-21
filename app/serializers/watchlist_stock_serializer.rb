class WatchlistStockSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :stocks
end
