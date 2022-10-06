class StocksController < ApplicationController
  skip_before_action :authenticate, only: %i[get_stocks create]

  # need to change REPORTED_FINANCIALS/GRTS/10-Q to dynamic from client request
  # REPORTED_FINANCIALS/#{some_variable}/10-Q
  
  def get_cash_and_expenses
    url = "https://cloud.iexapis.com/stable/time-series/REPORTED_FINANCIALS/#{ApplicationController.results[0].ticker}/10-Q?last=2&token=API_KEY_SECRET"
    pp ApplicationController.results
      response = RestClient.get(url)
      r = JSON.parse(response)
      render json: r(only: [
          :DocumentFiscalPeriodFocus, :DocumentFiscalYearFocus, :CashCashEquivalentsAndMarketableSecurities, :Assets,
          :ResearchAndDevelopmentExpense, :GeneralAndAdministrativeExpense, :NetIncomeLoss, :OperatingExpenses, :CommonStockSharesOutstanding
          ])
  end

  def create
    stock = Stock.create!(my_notese)
    render json: stock, status: :created
    pp stocks_params
  end

  def update
    @stocks.update(note_params)
    render json: @stocks, status: :created
  end

  private

  def stocks_params
    params.permit(:ticker, :stock)
  end

  def note_params
    params.permit(:my_notes)
  end


end
