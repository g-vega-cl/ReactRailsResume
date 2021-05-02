class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :slug
      t.string :git_link

      t.timestamps
    end
  end
end
