NewsReader::Application.routes.draw do
  namespace :api do
    resources :feeds, only: [:index, :create, :show] do
      resources :entries, only: [:index, :destroy]
    end
  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  root to: "static_pages#index"
end
