class SessionsController < ApplicationController

    skip_before_action :authenticate_user, only: :create

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate_user(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
