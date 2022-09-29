class StockSerializer < ActiveModel::Serializer
  # attributes :id, :ticker, :DocumentFiscalPeriodFocus, :DocumentFiscalYearFocus, :CashCashEquivalentsAndMarketableSecurities, :Assets,
  # :ResearchAndDevelopmentExpense, :GeneralAndAdministrativeExpense, :NetIncomeLoss, :OperatingExpenses, :CommonStockSharesOutstanding

  attributes :id, :ticker
  
end
