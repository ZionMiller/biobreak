Rails.application.routes.draw do
  resources :watchlists
  # resources :bio_stocks, param: :symbol
  resources :stocks, only: [:update, :show, :index]
  resources :users

  post '/watchlist', to: 'watchlists#create'
  get '/watchlist', to: 'watchlists#show'

  get '/search/:symbol', to: 'bio_stocks#search', as: 'search'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/stocks', to: "stocks#get_cash_and_expenses"

  # get '*path',
  #     to: 'fallback#index',
  #     constraints: ->(req) { !req.xhr? && req.format.html? }
end
