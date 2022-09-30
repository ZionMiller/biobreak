class BioStocksController < ApplicationController

    def search
        term = params[:symbol]
        @results = BioStock.where("ticker LIKE ?", "%#{term.upcase}%")
        # debugger
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
