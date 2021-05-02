# ReactRailsResume
 A resume build with react and rails. Will have CI/DI and deployment

Ugly notes, just for me to memember the flow.
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

## For frontend react.
1. add javascript_pag_tag to your views.
2. create views/pages/index.html.erb
3. Don't forget to add - .tsx to extensions in webpacker.yml
4. Now create components and build the react structure


## For deployment.
1. Created main.yml (Not sure if it matters. But It's a start for github actions)
  - Note, in Gemfile, passed 'sqlite3' to only be used in :development, :test. And added postgres, so heroku uses postgres in deploy. (Then do bundle install)
    - Magic of rails bby. It works with any db!
2. Went to heroku and literally did connect to github -> Automatic deployment, now it deploys every time something is pused to main. (CD!)
3. Shoud now create a CI flow to test things before I push to main
4. remember to do heroku run rake db:migrate -a rails-react-resume