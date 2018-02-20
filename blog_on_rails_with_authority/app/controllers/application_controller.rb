class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  helper_method :current_user

  def authenticate_user!
    unless current_user.present?
      flash[:alert] = 'Sign in first, bro'
      redirect_to new_session_path
    end
  end
end
