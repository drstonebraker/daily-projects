class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end
  
  def logout!(user)
    session[:session_token] = nil
    user.reset_session_token!
  end
  #
  # def require_user!
  #   redirect_to new_session_url unless logged_in?
  # end
end
