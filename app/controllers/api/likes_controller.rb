class Api::LikesController < ApplicationController
 before_action :require_logged_in, only: [:create, :destroy]

  # def create
  #   @like = Like.new(like_params)
  #   @like.user_id = current_user.id

  #   if @like.save!
  #     render :show
  #   else
  #     render json: @like.errors.full_messages, status: :unprocessable_entity
  #   end
  # end

  def create
        @like = Like.new(like_params)
        if @like.save 
            # debugger
            render :show  
        else
            # debugger
           render json: ["Invalid like!"], status: 401
        end
    end

  def destroy
        @like = Like.find(params[:id])
        @like.destroy   
    end


  private
  def like_params
    params.require(:like).permit(:video_id, :user_id, :comment_id, :like_nums)
  end
end