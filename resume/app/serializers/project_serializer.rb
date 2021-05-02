class ProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :git_link, :name, :slug

  has_many :feedbacks
end
