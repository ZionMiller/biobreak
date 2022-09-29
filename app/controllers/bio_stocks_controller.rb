class BioStocksController < ApplicationController

    def search
        term = params[:search_term]
        @results = BioStock.where("ticker LIKE ?", "%#{:symbol.upcase}%")
        render json: @results, status: :ok
    end

    # def show(query)
    #     # BioStock.all.select do |stock|
    #     #     # bacon canon
    #     #     stock.ticker =~ query
    #     # end
    #     params[:symbol]
    # end

end
