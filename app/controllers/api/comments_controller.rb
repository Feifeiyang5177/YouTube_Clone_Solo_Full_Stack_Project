class Api::CommentsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy, :update]
    def create
        @comment = Comment.new(comment_params)
        if @comment.save 
            # debugger
            render :show  
        else
            # debugger
           render json: ["Invalid comment!"], status: 401
        end
    end

    def show 
        @comment = Comment.find(params[:id])
        render :show
    end

    def index
        @comments = Comment.all
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