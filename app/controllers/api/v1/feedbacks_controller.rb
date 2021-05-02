module Api
  module V1
    class FeedbacksController < ApplicationController
      protect_from_forgery with: :null_session

      def create
        feedback = Feedback.new(feedback_params)

        if feedback.save
          render json: FeedbackSerializer.new(feedback).serialized_json
        else
          render json: { error: feedback.errors.messages }, status: 422
        end
      end

      def destroy
        feedback = Feedback.find(feedback[:id])

        if feedback.destroy
          head :no_content
        else
          render json: { error: feedback.errors.messages }, status: 422
        end
      end

      private

      def feedback_params
        params.require(:feedback).permit(:publisher, :comment, :rating, :project_id)
      end

    end
  end
end