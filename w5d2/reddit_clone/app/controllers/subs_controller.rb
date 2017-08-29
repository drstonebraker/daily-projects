class SubsController < ApplicationController
  def new
    @sub = flash[:sub] || Sub.new
  end

  def create
    @sub = Sub.new(sub_params)
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash[:errors] = @sub.errors
      flash[:sub] = @sub
      redirect_to new_sub_url
    end
  end

  def edit
  end

  def update
  end

  def index
  end

  def show
  end

  def destroy
  end

  private

  def sub_params
    params.require(:sub).permit(:title, :description)
  end
end
