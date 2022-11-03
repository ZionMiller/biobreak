class StocksController < ApplicationController
  skip_before_action :authenticate, only: %i[get_stocks create]

  # need to change REPORTED_FINANCIALS/GRTS/10-Q to dynamic from client request
  # REPORTED_FINANCIALS/#{some_variable}/10-Q
  
  def search
    term = params[:symbol]
    results = get_ticker(term)
    if results
      render json: results, status: :ok
    else
      render json: { error: "Ticker doesn't exist in our database" }
    end
  end

  def get_ticker(symbol)
    BioStock.where("ticker LIKE ?", "%#{symbol.upcase}%")
  end

  def cash_and_expenses
    ticker = get_ticker(params[:symbol])[0].ticker
    puts ticker
    # debugger
    url = "https://cloud.iexapis.com/stable/time-series/REPORTED_FINANCIALS/#{ticker}/10-Q?last=2&token=API_KEY_SECRET"
      response = RestClient.get(url)
      r = JSON.parse(response)
      render json: r(only: [
          :DocumentFiscalPeriodFocus, :DocumentFiscalYearFocus, :CashCashEquivalentsAndMarketableSecurities, :Assets,
          :ResearchAndDevelopmentExpense, :GeneralAndAdministrativeExpense, :NetIncomeLoss, :OperatingExpenses, :CommonStockSharesOutstanding
          ])
  end

  def news
    url = 'https://yahoo-finance97.p.rapidapi.com/news'
  end

  def create
    stock = Stock.create!(my_notes)
    render json: stock, status: :created
    # pp stocks_params
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
