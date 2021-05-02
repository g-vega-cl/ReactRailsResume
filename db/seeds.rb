# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

projects = Project.create([
  {
    name: 'ReactRailsResume',
    git_link: 'https://github.com/g-vega-cl/ReactRailsResume'
  },
  {
    name: 'HOLDR',
    git_link: 'https://github.com/g-vega-cl/HOLDR'
  }
])


feedback = Feedback.create([
  {
    publisher: 'César Vega',
    rating: 5,
    comment: 'I like this one',
    project: projects.first
  },
  {
    publisher: 'César Vega',
    rating: 2,
    comment: 'Meh, could be better',
    project: projects.first
  }
])