Rails.application.routes.draw do

get('/', to:'posts#index', as: :root)

resources :posts do
  resources :comments, only: [:create, :destroy], shallow: true
end

end
