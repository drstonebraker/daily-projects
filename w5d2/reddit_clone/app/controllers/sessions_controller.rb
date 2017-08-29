class SessionsController < ApplicationController

  def new
    @user = flash[:user] || User.new
  end

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login!(@user)
      redirect_to root_url
    else
      flash[:user] = User.new(username: user_params[:username])
      flash[:errors] = ['Invalid username or password']
      redirect_to new_session_url
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
