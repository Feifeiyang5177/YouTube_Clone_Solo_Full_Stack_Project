

// Post User
export const signUp = user => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: {user}
    })
);

// Post Session
export const logIn = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user}
    })
);

 
// Delete Session
export const logOut = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
);














