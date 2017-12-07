class Api::ChartsController < ApplicationController
  before_action :set_chart, only: [:update, :destroy]

  def index
    render json: Chart.all
  end

  def create
    chart = Chart.new(chart_params)
    if chart.save
      render json: chart
    else
      render json: { errors: chart.errors }, status: 422
    end
  end

  def update
    chart.update(:name)
    render json: chart
  end

  def destroy
    chart.destroy
  end

  private

  def chart_params
    params.require(:chart).permit(:name)
  end

  def set_chart
    chart = Chart.find(params[:id])
  end

end
