Rails.application.routes.draw do

  get 'posts/index'

  get 'posts/show'

  get 'posts/new'

  get 'posts/create'

  get 'posts/edit'

  get 'posts/update'

  get 'posts/destroy'

  resource :session, only: %i(new create destroy)

  resources :users
  resources :subs

  root to: 'subs#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
