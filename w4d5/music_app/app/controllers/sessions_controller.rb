class SessionsController < ApplicationController

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(session_params[:email], session_params[:password])
    if @user
      login_user!(@user)
      redirect_to bands_url
    else
      flash[:errors] = ['Invalid email or password']
      redirect_to user_url(@user)
    end
  end

  def destroy
    @current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to new_session_url
  end

  def session_params
    params.require(:user).permit(:email, :password)
  end
end