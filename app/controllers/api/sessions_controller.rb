class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Nope. Wrong credentials!'], status: 401
    else
      login!(@user)
      render 'api/users/show';
    end
  end

  def destroy
    logout!
    render json: { message: 'Logout successful.' }
  end
end




# class Api::SessionsController < ApplicationController
#   def new
#     render :new
#   end

#   def create
#     @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
#     if @user.nil?
#       flash.now[:errors] = ['Invalid username or password.']
#       render :new
#     else
#       login!(@user)
#       redirect_to user_url(@user)
#     end

#   end

#   def destroy
#     logout!
#     redirect_to new_session_url
#   end
# end















# class Api::SessionsController < ApplicationController

#   def create 
#     @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
#     if @user.nil?
#       render json: ["Invalid username or password"], status: 401
#     else
#       login!(@user)
#       render 'api/users/show'
#     end
#   end

#   def destroy
#     @user = current_user
#     if @user
#       logout
#       render "api/users/show"
#     else
#       render json: ["No current user"], status: 404
#     end
#   end

# end
