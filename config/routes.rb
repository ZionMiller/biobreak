Rails.application.routes.draw do
  resources :watchlists
  resources :bio_stocks
  resources :stocks
  resources :users

  post '/watchlist', to: 'watchlists#create'
  get '/watchlist', to: 'watchlists#show'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # get '/stocks', to: "stocks#get_stocks"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
