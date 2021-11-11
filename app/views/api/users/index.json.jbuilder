json.array! @users do |user|
    json.user do 
       json.name user.username
       json.email user.email
    end 
end 

# @users.each do |user|
#     json.set! user.id do
#     json.extract! user, :id, :username, :email, :videos
#     json.userPhotoUrl url_for(user.photo) if user.photo.attached?
#     end 
# end 