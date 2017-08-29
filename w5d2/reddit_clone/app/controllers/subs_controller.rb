class SubsController < ApplicationController
  before_action :require_user!, only: %i(new create edit update destroy)
  before_action :require_mod_ownership!, only: %i(edit update destroy)

  def index
    @subs = Sub.all
  end

  def show
    @sub = Sub.find(params[:id])
    @posts = @sub.posts
  end

  def new
    @sub = Sub.new(flash[:sub])
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.moderator_id = current_user.id
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash[:errors] = @sub.errors
      flash[:sub] = @sub
      redirect_to new_sub_url
    end
  end

  def edit
    @sub = Sub.new(flash[:sub])
  end

  def update
    @sub = Sub.new(sub_params)
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash[:errors] = @sub.errors
      flash[:sub] = @sub
      redirect_to new_sub_url
    end
  end

  def destroy
    sub_reddit = Sub.find(params[:id])
    if sub_reddit.destroy
      redirect_to root_url
    else
      flash[:errors] = sub_reddit.errors.full_messages
      redirect_to sub_url(params[:id])
    end
  end

  private

  def sub_params
    params.require(:sub).permit(:title, :description)
  end

  def require_mod_ownership!
    unless Sub.find(params[:id]).moderator_id == current_user.id
      redirect_to sub_url(params[:id])
    end
  end
end
