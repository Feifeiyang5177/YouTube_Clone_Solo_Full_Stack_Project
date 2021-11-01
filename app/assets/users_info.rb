User.create([
    {
        username: 'Abe',
        email: 'Abe@youtube.com',
        password: 'abe123'
    },
    {
        username: 'Bebe',
        email: 'Bbe@youtube.com',
        password: 'bebe123'
    },
    {
        username: 'Cardi',
        email: 'cardi@youtube.com',
        password: 'cardi123'
    },
    {
        username: 'Daniel',
        email: 'danile@kory.org',
        password: 'danile123'
    },
])

sample = User.create!({
    username: 'sampleUser',
    email: 'sample@yacast.com',
    password: 'sampleuser123'
})

Ella = User.create!({
    username: 'Ella',
    email: 'ella@yatube.com',
    password: "ella123"
})