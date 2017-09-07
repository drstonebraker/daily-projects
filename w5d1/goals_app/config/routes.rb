Rails.application.routes.draw do

  resource :session, only: %i(new create destroy)

  resources :users do
    resources :goals
  end

  resources :goals

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
