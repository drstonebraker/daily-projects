Rails.application.routes.draw do

  get 'subs/new'

  get 'subs/create'

  get 'subs/edit'

  get 'subs/update'

  get 'subs/index'

  get 'subs/show'

  get 'subs/destroy'

  resource :session, only: %i(new create destroy)

  resources :users

  root to: 'users#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
