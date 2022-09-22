class StocksController < ApplicationController

    skip_before_action :authenticate_user, only: :get_stocks


    # def get_stocks
    #     url = "https://cloud.iexapis.com/stable/time-series/REPORTED_FINANCIALS/AAPL/10-Q?range=1y&token=API_KEY_SECRET"
    #     url2 = "https://cloud.iexapis.com/stable/time-series/REPORTED_FINANCIALS/GRTS/10-Q?last=2&token=API_KEY_SECRET"
    #     # response = RestClient.get(url)
    #     response2 = RestClient.get(url2)
    #     r2 = JSON.parse(response2)
    #     debugger
    #     render json: response
    # end

    # ATTRIBUTES NEEDED FOR GRAPHS
    # Cash:
        # CashCashEquivalentsAndMarketableSecurities
    # Assets:
        # Assets

    # R&D
        # ResearchAndDevelopmentExpense
    # SG&A
        # SellingGeneralAndAdministrativeExpense
    # Shares:
        # CommonStockSharesOutstanding
    # 

end
