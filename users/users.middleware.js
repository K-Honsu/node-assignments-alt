const ValidateUserCreation = (req, res, next) => {
    if (!req.body.username || !req.body.username.trim()) {
        return res.status(400).json({
            error: 'Sorry, username is required to continue'
        })
    }

    if (!req.body.password || !req.body.password.trim()) {
        return res.status(400).json({
            error: 'sorry, password is required to continue'
        })
    }

    next()
}


module.exports = {
    ValidateUserCreation
}