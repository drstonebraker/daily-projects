class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  protect_from_forgery with: :exception
  
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  private

  def require_no_user!
    redirect_to cats_url if logged_in?
  end
end
