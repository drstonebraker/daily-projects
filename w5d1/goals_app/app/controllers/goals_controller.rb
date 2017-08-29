class GoalsController < ApplicationController
  def new
    @goal = Goal.new
  end

  def create
  end

  def edit
  end

  def update
  end

  def index
    @goals = Goal.all.includes(:user)
  end

  def show
  end

  def destroy
  end
end
