class ApplicationController < ActionController::API
    include ActionController::Cookies
    # before_action :authenticate_user

    # for testing cookies, will delete later
    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

    private

    def unprocessable_entity_response(exception)
        render json: { errrors: exception.record.errors }, status: :unprocessable_entity
    end

    def not_found_response(error)
        render json: { errors: {error.model => "Not found"} }, status: :not_found
    end

    # def current_user
    #     @current_user ||= User.find_by_id(session[:user_id])
    # end

    # def authenticate_user
    #     render json: { errors: {User: "You don't have access"} }, status: :unauthorized unless current_user
    # end

    # def authorized
    #     permitted = current_user.admin?
    #     render json: { error: {User: "doesn't have permission"} }, status: :forbidden unless permitted
    # end

end
