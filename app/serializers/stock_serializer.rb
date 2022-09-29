class StockSerializer < ActiveModel::Serializer
  # attributes :id, :ticker, :DocumentFiscalPeriodFocus, :DocumentFiscalYearFocus, :CashCashEquivalentsAndMarketableSecurities, :Assets,
  # :ResearchAndDevelopmentExpense, :GeneralAndAdministrativeExpense, :NetIncomeLoss, :OperatingExpenses, :CommonStockSharesOutstanding

  has_many :watchlist_stocks

  attributes :id, :ticker, :stock
  
end
