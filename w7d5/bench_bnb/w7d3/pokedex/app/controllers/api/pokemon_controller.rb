class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def create
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def update
  end

  def destroy
  end
end
