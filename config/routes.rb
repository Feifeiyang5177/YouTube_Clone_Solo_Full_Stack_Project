# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:formate=>:json}
#           api_video_likes GET    /api/videos/:video_id/likes(.:format)                                                    api/likes#index {:formate=>:json}
#        api_video_comments GET    /api/videos/:video_id/comments(.:format)                                                 api/comments#index {:formate=>:json}
#                api_videos GET    /api/videos(.:format)                                                                    api/videos#index {:formate=>:json}
#                           POST   /api/videos(.:format)                                                                    api/videos#create {:formate=>:json}
#                 api_video GET    /api/videos/:id(.:format)                                                                api/videos#show {:formate=>:json}
#                           PATCH  /api/videos/:id(.:format)                                                                api/videos#update {:formate=>:json}
#                           PUT    /api/videos/:id(.:format)                                                                api/videos#update {:formate=>:json}
#                           DELETE /api/videos/:id(.:format)                                                                api/videos#destroy {:formate=>:json}
#                 api_likes POST   /api/likes(.:format)                                                                     api/likes#create {:formate=>:json}
#                  api_like DELETE /api/likes/:id(.:format)                                                                 api/likes#destroy {:formate=>:json}
#              api_comments POST   /api/comments(.:format)                                                                  api/comments#create {:formate=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:formate=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:formate=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {formate: :json} do 

    resources :users, only: [:create]

    resources :videos, only: [:index, :show, :create, :update, :destroy] do 
      resources :likes, only: [:index]
      resources :comments, only: [:index] 
    end 
    
    resources :likes,  only: [:create, :destroy]
    resources :comments, only: [:create, :distroy]
    resource :session, only: [:create, :destroy]
  end 

  root "static_pages#root"
end
