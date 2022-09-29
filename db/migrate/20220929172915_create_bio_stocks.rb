class CreateBioStocks < ActiveRecord::Migration[7.0]
  def change
    create_table :bio_stocks do |t|
      t.string :ticker
      t.string :drug
      t.text :indication
      t.string :stage

      t.timestamps
    end
  end
end
