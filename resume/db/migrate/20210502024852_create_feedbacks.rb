class CreateFeedbacks < ActiveRecord::Migration[6.1]
  def change
    create_table :feedbacks do |t|
      t.string :publisher
      t.integer :rating
      t.string :comment
      t.belongs_to :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
