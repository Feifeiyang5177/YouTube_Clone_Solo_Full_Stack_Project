class Api::LikesController < ApplicationController


  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id

    if @like.save!
      render :show
    else
      render json: @like.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @like = Like.find_by_id(params[:id])
    
    if @like.destroy
      render :show
    else
      render json: @like.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def like_params
    params.require(:like).permit(:video_id, :comment_id, :user_id)
  end
end