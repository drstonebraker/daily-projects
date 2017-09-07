class CatRentalRequestsController < ApplicationController
  def index
    redirect_to cat_url(params[:cat_id])
  end

  def new
    render :new
  end

  def create
    @request = CatRentalRequest.new(request_params)
    if @request.save
      redirect_to cat_url(request_params[:cat_id])
    else
      render json: @request.errors.full_messages
    end
  end

  def destroy

  end

  private
  def request_params
    params.require(:cat_rental_request).permit(:cat_id, :start_date, :end_date)
  end
end
