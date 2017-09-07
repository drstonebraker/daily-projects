class UsersController < ApplicationController

  def index
    @users = User.all

    if params[:query]
      @users = @users.where("LOWER(users.username) LIKE '%#{params[:query].downcase}%'")
    end

    render json: @users
  end

  def show
    @user = User.find(params[:id])

    if @user
      render json: @user
    else
      render json: @user.errors.full_messages, status: 404
    end

  end

  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to users_url
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def destroy
    @user = User.find(params[:id])

    if @user.destroy
      redirect_to users_url
    else
      render json: @user.errors.full_messages
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      redirect_to user_url
    else
      render plain: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end
end
