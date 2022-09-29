class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authenticate

  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

  private

  # def searched_symbol
  #     @searched_symbol ||= Stock.find_by_TradingSymbol(session[:TradingSymbol])
  # end

  def unprocessable_entity_response(exception)
    render json: { errrors: exception.record.errors }, status: :unprocessable_entity
  end

  def not_found_response(error)
    render json: { errors: { error.model => 'Not found' } }, status: :not_found
  end

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

  def authenticate
    render json: { errors: { User: "You don't have access" } }, status: :unauthorized unless current_user
  end

  def authorized
    permitted = current_user.admin?
    render json: { error: { User: "doesn't have permission" } }, status: :forbidden unless permitted
  end
end
