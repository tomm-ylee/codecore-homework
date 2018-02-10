Rails.application.routes.draw do

get('/', to:'home#index', as: :root)  

resources :posts do
end

end
