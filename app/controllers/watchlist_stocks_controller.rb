class WatchlistStocksController < ApplicationController

    skip_before_action :authenticate, only: [:get_stocks, :create]

    def create
        watchlist_stocks = WatchlistStock.create!(watchlist_params)
        render json: watchlist_stocks, status: :created
    end

    def destroy
        watchlist_stocks.delete, "id goes here"
        head :no_content
    end

    private

    def watchlist_params
        params.permit("put watchlist params here")
    end

end
