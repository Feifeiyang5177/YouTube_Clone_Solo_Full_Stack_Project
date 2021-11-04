json.array! @users do |user|
    json.user do 
       json.name user.username
       json.email user.email
    end 
end 