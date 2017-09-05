class CatsController < ApplicationController
  before_action :require_logged_in!, only: %i( new create edit update )
  before_action :require_ownership!, only: %i( edit update )

  def index
    @cats = Cat.all
    render :index
  end

  def show
    @cat = Cat.find(params[:id])
    render :show
  end

  def new
    @cat = Cat.new
    render :new
  end

  def create
    @cat = Cat.new(cat_params)
    @cat.user_id = current_user.id

    if @cat.save
      redirect_to cat_url(@cat)
    else
      flash.now[:errors] = @cat.errors.full_messages
      render :new
    end
  end

  def edit
    render :edit
  end

  def update
    if @cat.update_attributes(cat_params)
      redirect_to cat_url(@cat)
    else
      flash.now[:errors] = @cat.errors.full_messages
      render :edit
    end
  end

  private

  def require_logged_in!
    unless logged_in?
      flash[:errors] = ['You must be logged in to create or edit a cat']
      redirect_to new_session_url
    end
  end

  def require_ownership!
    @cat = current_user.cats.find_by(id: params[:id])
    if @cat.nil?
      flash[:errors] = ['This is not your cat']
      redirect_to cat_url(params[:id])
    end
  end

  def cat_params
    params.require(:cat).permit(:age, :birth_date, :color, :description, :name, :sex)
  end
end
