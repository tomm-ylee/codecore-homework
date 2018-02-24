class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:edit]
  before_action :find_user, only: [:edit, :update, :update_pass]
  before_action :authorize_user!, only: [:edit, :update, :update_pass]

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params

    if @user.save
      flash[:notice] = "Welcome, #{@user.first_name}"
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @user.update user_params
      flash[:notice] = 'Changes saved'
      redirect_to edit_user_path(@user)
    else
      flash[:alert] = 'Changes not saved'
      redirect_to edit_user_path(@user)
    end
  end

  def update_pass
    passwords = passwords_params

    if @user.authenticate(passwords[:current_password])
      if passwords[:current_password] == passwords[:password]
        flash[:alert] = "New password cannot be the same as current password"
      elsif passwords[:password].length < 6
        flash[:alert] = "Password needs to be at least 6 characters"
      elsif @user.update(password: passwords[:password], password_confirmation: passwords[:password_confirmation])
        flash[:notice] = "Password updated"
      else
        flash[:alert] = "Confirmation password does not match"
      end
    else
      flash[:alert] = "Current password is incorrect"
    end
    redirect_to edit_user_path(@user)
  end

  private

  def find_user
    @user = User.find params[:id]
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

  def passwords_params
    params.require(:password_change).permit(:current_password, :password, :password_confirmation)
  end

  def authorize_user!
    unless can?(:manage, @user)
      flash[:alert] = "Access Denied"
      redirect_to root_path
    end
  end
end
