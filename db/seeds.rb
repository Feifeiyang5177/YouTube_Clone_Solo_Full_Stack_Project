# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'

User.destroy_all
Video.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('videos')


user1 = User.create!(username: 'Feifei', email: 'feifei1@gmail.com', password: '111111')
user2 = User.create!(username: 'user2', email: 'user2@gmail.com', password: '222222')
user3 = User.create!(username: 'user3', email: 'user3@gmail.com', password: '333333')
user4 = User.create!(username: 'user4', email: 'user4@gmail.com', password: '444444')
demo5 = User.create!(username: 'Demo5', email: 'user5@gmail.com', password: '555555')

video1 = Video.create!(title: 'Introduction', creator_id: user1.id, description: "This is my first video!", view_count: 0)
intro1 = URI.open("https://yatube-seeds.s3.amazonaws.com/demo1.MOV")
video1.vd.attach(io: intro1, filename:"demo1.MOV")

video5 = Video.create!(title: 'Maleficent Trailer', creator_id: user1.id, description: "Short version of Maleficent movie trailer", view_count: 0)
demo5 = URI.open('https://yatube-seeds.s3.amazonaws.com/demo5.MOV')
video5.vd.attach(io: demo5, filename:'demo5.MOV')

video6 = Video.create!(title: 'Summer', creator_id: user2.id, description: "Erhu and piano playing Summer", view_count: 0)
demo6 = URI.open('https://yatube-seeds.s3.amazonaws.com/demo6.MOV')
video6.vd.attach(io: demo6, filename:'demo6.MOV')