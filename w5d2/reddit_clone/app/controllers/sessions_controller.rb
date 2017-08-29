class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login!(@user)
      redirect_to root_url
    else
      @user = User.new
      flash[:errors] = ['Invalid username or password']
      render :new
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