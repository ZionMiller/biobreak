class CreateWatchlists < ActiveRecord::Migration[7.0]
  def change
    create_table :watchlists do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :tickers, array: true, default: []

      t.timestamps
    end
  end
end
