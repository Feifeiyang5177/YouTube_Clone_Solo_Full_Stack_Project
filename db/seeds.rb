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


user1 = User.create!(username: 'Feifei Yang 杨飞飞', email: 'feifei1@gmail.com', password: '111111')
user2 = User.create!(username: 'Andy S 吴世豪', email: 'user2@gmail.com', password: '222222')
user3 = User.create!(username: 'Hien N', email: 'user3@gmail.com', password: '333333')
user4 = User.create!(username: 'Emily', email: 'user4@gmail.com', password: '444444')
demo5 = User.create!(username: 'DemoUser 演释者', email: 'user5@gmail.com', password: '555555')

video1 = Video.create!(title: 'Introduction', creator_id: user2.id, description: "This is my first video!", view_count: 198)
intro1 = URI.open("https://yatube-seeds.s3.amazonaws.com/demo1.MOV")
video1.vd.attach(io: intro1, filename:"demo1.MOV")

video2 = Video.create!(title: 'Maleficent Trailer', creator_id: user3.id, description: "Short version of Maleficent movie trailer", view_count: 81)
demo5 = URI.open('https://yatube-seeds.s3.amazonaws.com/demo5.MOV')
video2.vd.attach(io: demo5, filename:'demo5.MOV')

video3 = Video.create!(title: 'Summer', creator_id: user4.id, description: "Erhu and piano playing Summer", view_count: 164)
demo6 = URI.open('https://yatube-seeds.s3.amazonaws.com/demo6.MOV')
video3.vd.attach(io: demo6, filename:'demo6.MOV')

video4 = Video.create!(title: 'Voice Recognition MERN Project', creator_id: user1.id, description: "Around the Block is an app aimign to help elderly enter social life. This elderly meetup app can handle voice to speech input with MongoDB on backend and React Redux on frontend
As a frontend lead of Around the Block full-stack project, my job was to organize technical meetings with engineers to keep track of the working flow and process as well as collaborating with backend engineers to fetch the correct data and present on the frontend.", view_count: 376)
voice_recognition = URI.open('https://yatube-seeds.s3.amazonaws.com/voice_recognition.MP4')
video4.vd.attach(io: voice_recognition, filename:"voice_recognition.MP4")

video5 = Video.create!(title: 'Youtube Clone Longin and Signup', creator_id: user1.id, description: "A pixel perfect Youtube clone full stack project - YaTube with Ruby on Rails on backend and React Redux on frontend. It incorporated Ruby, Rails, SQL, React, Redux, and JavaScript. 
It also included Google Login-like user authentication.", view_count: 269)
yatubegif1  = URI.open('https://yatube-seeds.s3.amazonaws.com/yatubegif1.mov')
video5.vd.attach(io: yatubegif1, filename:'yatubegif1.mov')

video6 = Video.create!(title: 'Youtube Clone Show Page', creator_id: user1.id, description: "YaTube is a pixel perfect Youtube clone full stack project with Ruby on Rails on backend and React Redux on frontend. It incorporated Ruby, Rails, SQL, React, Redux, and JavaScript. 
It also included Google Login-like user authentication. This is the video show page on the app.", view_count: 16)
yatubegif2 = URI.open('https://yatube-seeds.s3.amazonaws.com/yatubegif2.mov')
video6.vd.attach(io: yatubegif2, filename:'yatubegif2.mov')

