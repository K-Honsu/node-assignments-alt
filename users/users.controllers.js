const database = require('./users.db')

const CreateUser = (req, res) => {
    const user = req.body;

    user.api_key = `${user.username}_${user.password}`

    if (user.username === 'emmanuel') {
        user.user_type = 'admin'
    } else {
        user.user_type = 'user'
    }

    database.users.push(user)


    return res.status(201).json({
        message: 'User created successfully',
        users: database.users
    })

}

module.exports = {
    CreateUser
}