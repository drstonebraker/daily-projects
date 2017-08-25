class BandsController < ApplicationController
  before_action :require_user!, only: %i(new create edit update)

  def new
    @band = Band.new
    render :new
  end

  def create
    @band = Band.new(band_params)
    if @band.save
      redirect_to band_url(@band)
    else
      flash[:errors] = @band.errors.full_messages
      redirect_to new_band_url
    end
  end

  def band_params
    params.require(:band).permit(:name)
  end
end
