# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'creating greetings seed ...'

Greeting.create(text: 'good morning')
Greeting.create(text: 'Welcome to my Website')
Greeting.create(text: 'Hey')
Greeting.create(text: 'How are you?')
Greeting.create(text: 'how are the kids doing ?')

puts 'successfully ....'