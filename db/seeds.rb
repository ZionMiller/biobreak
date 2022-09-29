puts "Seeding a test user"
User.create(first_name: "zion", last_name: "stonks", email: "something@gmail.com", zipcode: 90210, password_digest: "abc123")
puts "done seeding that person"


puts "seeding some stonks"
Stock.create(ticker: "APPL", company_name: "testing", my_notes: "another test")

 
puts "seeding watchlist"


puts "done seeding watchlist"