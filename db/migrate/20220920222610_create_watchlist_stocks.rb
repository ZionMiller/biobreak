class CreateWatchlistStocks < ActiveRecord::Migration[7.0]
  def change
    create_table :watchlist_stocks do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :stocks, null: false, foreign_key: true

      t.timestamps
    end
  end
end
