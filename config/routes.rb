
Rails.application.routes.draw do 
    namespace :api, defaults: {format: :json} do
        resources :users, except: [:update]
        resource :session, only: [:create, :destroy]
    end 
    root to: 'root#root'
end 