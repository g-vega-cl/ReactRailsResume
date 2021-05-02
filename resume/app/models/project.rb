class Project < ApplicationRecord
  has_many :feedbacks

  before_create :slugify

  def slugify
    self.slug = name.parameterize 
  end

  def avg_score
    feedbacks.average(:rating).round(2).to_f
  end
end
