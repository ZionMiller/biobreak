# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_20_231012) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "stocks", force: :cascade do |t|
    t.string "ticker"
    t.string "company_name"
    t.string "my_notes"
    t.integer "total_assets"
    t.integer "cash_and_equivalents"
    t.integer "revenue"
    t.integer "total_opex"
    t.integer "sga_expense"
    t.integer "net_loss"
    t.integer "research_and_development"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.integer "zipcode"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
  end

  create_table "watchlist_stocks", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "stocks_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stocks_id"], name: "index_watchlist_stocks_on_stocks_id"
    t.index ["user_id"], name: "index_watchlist_stocks_on_user_id"
  end

  add_foreign_key "watchlist_stocks", "stocks", column: "stocks_id"
  add_foreign_key "watchlist_stocks", "users"
end
