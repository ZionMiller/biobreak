class WatchlistsController < ApplicationController

    skip_before_action :authenticate, only: :create

    def index
        tickers = Watchlist.all
        render json: tickers, status: :ok
    end

  def show
      stock ||= Watchlist.find_by_id(session[:user_id])
      render json: stock, status: 200
  end

  def create 
        watchlist ||= Watchlist.create!(user_id: session[:user_id])
        if BioStock.find_by(ticker: watchlist_params.tickers.upcase)
          pp watchlist_params
            update_watchlist = Watchlist.tickers
            update_watchlist.push(watchlist_params)
            watchlist.update!(tickers: update_watchlist)
            render json: watchlist, status: :created
        else
            render json: { error: 'Symbol doesn\'t exist' }, status: 404
        end
  end

  private

  def watchlist_params
    params.require(:watchlist).permit(:tickers)
  end

end
