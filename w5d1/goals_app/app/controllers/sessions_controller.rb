class SessionsController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(session_params[:username], session_params[:password])
    if @user.nil?
      flash[:errors] = ['Invalid username or password']
      @user = User.new
      render :new
    else
      login!(@user)
      redirect_to user_url(@user)
    end
  end

  def destroy
    logout!(current_user)
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end

end
