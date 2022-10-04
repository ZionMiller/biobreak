class StocksController < ApplicationController
  skip_before_action :authenticate, only: %i[get_stocks create]

  # need to change REPORTED_FINANCIALS/GRTS/10-Q to dynamic from client request
  # REPORTED_FINANCIALS/#{some_variable}/10-Q

  # def get_cash_and_expenses
  #     url = "https://cloud.iexapis.com/stable/time-series/REPORTED_FINANCIALS/#{@searched_symbol}/10-Q?last=2&token=API_KEY_SECRET"
  #     response = RestClient.get(url)
  #     r = JSON.parse(response)
  #     render json: r(only: [
  #         :DocumentFiscalPeriodFocus, :DocumentFiscalYearFocus, :CashCashEquivalentsAndMarketableSecurities, :Assets,
  #         :ResearchAndDevelopmentExpense, :GeneralAndAdministrativeExpense, :NetIncomeLoss, :OperatingExpenses, :CommonStockSharesOutstanding
  #         ])
  # end

#   def get_news_ownership
#     url = "https://yahoo-finance97.p.rapidapi.com/institutional-holders"
#     response = RestClient.get(url)
#   end

#   def get_news
    
#   end

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

  # def stocks_news
  #     locater = "https://cloud.iexapis.com/v1/stock/aapl/batch?types=quote,news,chart&range=1m&last=10&token=API_KEY_SECRET"
  # response = RestClient.get(locater)
  # r = JSON.parse(response)
  # render json: response
  # end
end
