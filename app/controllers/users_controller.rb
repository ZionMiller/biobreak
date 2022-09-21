class UsersController < ApplicationController

    skip_before_action :authenticate_user, only: :create

    def show
        user = User.find_by_id(session[:user_id])
        if user
            render json: user, status: 200
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :zipcode, :password)
    end

end
