class BioStockSerializer < ActiveModel::Serializer
  attributes :id, :ticker, :drug, :indication, :stage

end
