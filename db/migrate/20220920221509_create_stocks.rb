class CreateStocks < ActiveRecord::Migration[7.0]
  def change
    create_table :stocks do |t|
      t.string :ticker
      t.string :company_name
      t.string :my_notes
      t.integer :total_assets
      t.integer :cash_and_equivalents
      t.integer :revenue
      t.integer :total_opex
      t.integer :sga_expense
      t.integer :net_loss
      t.integer :research_and_development

      t.timestamps
    end
  end
end
