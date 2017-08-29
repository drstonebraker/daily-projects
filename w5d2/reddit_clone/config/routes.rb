Rails.application.routes.draw do

  resource :session, only: %i(new create destroy)

  resources :users
  resources :subs

  root to: 'subs#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
