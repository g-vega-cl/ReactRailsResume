# ReactRailsResume
 A resume build with react and rails. Will have CI/DI and deployment

1. rails new resume --webpack=react -T
2. rails db:create
3. Create models for feedback:
  - publisher
  - rating
  - comment
  - belongs_to: project
3. Create models for project:
  - name
  - slug
  - git_link
3. example: rails g model Feedback publisher rating:integer comment project:belongs_to
4. rails db:migrate
5. Now comes configuration. Depends on each project
6. for example... project.rb add has_many :feedbacks.

## For the API you need to serialize and tell the db what to expose
7. eg. rails g serializer Feedback publisher rating comment project_id
  - note that project_id was added when we migrated the db (check schema.rb)

8. Configure routes. in routes.rb
9. Create pages controller.
  - And ProjectsController and FeedbacksController 
  - configure
