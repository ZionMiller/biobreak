class StockSerializer < ActiveModel::Serializer
  attributes :id, :ticker, :company_name, :my_notes, :total_assets, :cash_and_equivalents, :revenue, :total_opex, :sga_expense, :net_loss, :research_and_development
end
