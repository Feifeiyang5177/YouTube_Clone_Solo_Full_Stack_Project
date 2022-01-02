
Rails.application.routes.draw do 
    namespace :api, defaults: {format: :json} do
        resources :users, except: [:update]
        
        resources :videos, only: [:index, :create, :show] do 
            post 'add_views', on: :member
        end 

        resource :session, only: [:create, :destroy]

        resources :likes, only: [:create, :destroy]
    end 
    root to: 'root#root'
end 

