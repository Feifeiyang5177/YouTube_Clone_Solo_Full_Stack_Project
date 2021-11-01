

export const logIn = (user) => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: {user}
    })

)

export const logOut = () => ({
    url: '/api/session',
    method: 'DELETE'

})

export const signUp = (user) => ({
    url: '/api/session',
    method: 'POST',
    data: {user}

})

