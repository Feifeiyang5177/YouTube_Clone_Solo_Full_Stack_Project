class Api::CommentsController < ApplicationController
    #before_action :require_login, only: [:create, :destroy, :update]
    before_action :require_logged_in, only: [:create, :destroy, :update]
    def create
        # @comments = current_user.comments
        #@comments = Comment.all
        # currentComment = false;
        # @comments.each do |comment|
        #    currentComment = true if comment.video_id == comment_params[:video_id].to_i
        # end
        # if !currentComment
        @comment = Comment.new(comment_params)
        if @comment.save 
            render :show  
        else
           render json: @comment.errors.full_messages, status: 401
        end
    end

    def show 
        @comment = Comment.find(params[:id])
        render :show
    end

    def index
        @comments = Comments.all
        render :index

    end


    def update
        @comment = Comment.find(params[:id])
        if @comment && @comment.update(comment_params)
            render :show
        else
            render json: ["Comment can't be blank!"], status: 401
        end
    end

     def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy   
    end

    private
    def comment_params
        params.require(:comment).permit(:commenter_id, :video_id, :body)
    end

end