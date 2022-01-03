class Api::VideosController < ApplicationController

    def index 
        @videos = Video.all 
        render :index 
    end 


    def create
        @video = Video.new(video_params)
        @video.creator_id = current_user.id
        @video.view_count = 0

        if @video.save 
            render :show
        else 
            render json: @video.errors.full_messages, status: 401
        end 
    end 

    def show
      
        @video = Video.find(params[:id])
        render :show
    end 

    def add_views
    @video = Video.find_by_id(params[:id])
    @video.view_count += 1
    @video.save
    render :views
  end

    private
    def video_params
        params.require(:video).permit(:title, :creator_id, :description, :view_count, :vd, :created_at, :updated_at)
    end 

end
