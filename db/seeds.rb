# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Video.destroy_all
Comment.destroy_all
Like.destroy_all


user1 = User.create!(username: 'Faker1', email: 'fakeuser1@gmail.com', password: 111111)
user2 = User.create!(username: 'Faker2', email: 'fakeuser2@gmail.com', password: 222222)
user3 = User.create!(username: 'Faker3', email: 'fakeuser3@gmail.com', password: 333333)
user4 = User.create!(username: 'Faker4', email: 'fakeuser4@gmail.com', password: 444444)

video1 = Video.create!(title: "video1", description: "test video 1", creator_id: 1, view_count: 0)


# :title, :description, :creator_id, :view_count
































































#user5 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
#user6 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
#user7 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
#user8 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
#user9 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')

#Like.create(user_id: user3.id, chirp_id: chirp1.id)
#Like.create(user_id: user4.id, chirp_id: chirp2.id)
#Like.create(user_id: user5.id, chirp_id: chirp3.id)
#Like.create(user_id: user3.id, chirp_id: chirp3.id)
#Like.create(user_id: user4.id, chirp_id: chirp1.id)
#Like.create(user_id: user5.id, chirp_id: chirp2.id)