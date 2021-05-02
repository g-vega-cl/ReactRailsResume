class FeedbackSerializer
  include FastJsonapi::ObjectSerializer
  attributes :publisher, :rating, :comment, :project_id
end
