Rails.application.routes.draw do
  get 'goals/new'

  get 'goals/create'

  get 'goals/edit'

  get 'goals/update'

  get 'goals/index'

  get 'goals/show'

  get 'goals/destroy'

  resource :session, only: %i(new create destroy)

  resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
