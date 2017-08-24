class SessionsController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    user = User.find_by_credentials(user_params[:username], user_params[:password])
    if user.nil?
      flash[:errors] = ['Invalid username or password']
      redirect_to new_session_url
    else
      login!(user)
      redirect_to cats_url
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to new_session_url
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  private

  def user_params
    params.require(:user).permit(:session_token, :username, :password)
  end
end
