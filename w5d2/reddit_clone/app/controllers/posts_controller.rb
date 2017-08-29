class PostsController < ApplicationController

  before_action :require_user!, only: %i(new create edit update destroy)
  before_action :require_author!, only: %i(edit update)
  before_action :require_privilege!, only: %i(destroy)

  def index
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = flash[:post] || Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    @post.sub_id = params[:sub_id]
    if @post.save
      redirect_to post_url(params[:id])
    else
      flash[:errors] = @post.errors
      flash[:post] = @post
      redirect_to new_post_url
    end
  end

  def edit
    @post = flash[:post] || Post.new
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to post_url(params[:id])
    else
      flash[:errors] = @post.errors
      flash[:post] = @post
      redirect_to edit_post_url
    end
  end

  def destroy
    post = Post.find(params[:id])
    if post.destroy
      redirect_to sub_url(post.sub_id)
    else
      flash[:errors] = post.errors.full_messages
      redirect_to post_url(params[:id])
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :url, :content)
  end

  def require_author!
    unless Post.find(params[:id]).author_id == current_user.id
      redirect_to post_url(params[:id])
    end
  end

  def require_privilege!
    post = Post.find(params[:id])
    unless [post.author_id, post.sub.moderator_id].include?(current_user.id)
      redirect_to post_url(params[:id])
    end
  end

end
