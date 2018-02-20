Rails.application.routes.draw do

  get('/', to:'posts#index', as: :root)

  resources :posts do
    resources :comments, only: [:create, :destroy], shallow: true
  end

  resources :users, except: [:show]
  post('user/:id/update_password', to:'users#update_pass', as: :update_user_password)

  resource :session, only: [:new, :edit, :create, :destroy]

end
