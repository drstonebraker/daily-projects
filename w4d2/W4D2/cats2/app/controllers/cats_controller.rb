class CatsController < ApplicationController
  def index
    @cats = Cat.all

    render :index
  end

  def show
    @cat = Cat.find(params[:id])

    if @cat
      render :show
    else
      render plain: 'Cat not found!', status: 404
    end
  end

  def new
    render :new
  end

  def create
    @cat = Cat.new(cat_params)
    if @cat.save
      redirect_to cat_url(@cat)
    else
      render json: @cat.errors.full_messages
    end
  end

  def edit
    @cat = Cat.find(params[:id])
    render :edit
  end

  def update
    @cat = Cat.find(params[:id])
    if @cat.update(cat_params)
      redirect_to cat_url(@cat)
    else
      render json: @cat.errors.full_messages
    end
  end

  private
  def cat_params
    params.require(:cat).permit(:description, :name, :sex, :color, :birth_date)
  end
end
