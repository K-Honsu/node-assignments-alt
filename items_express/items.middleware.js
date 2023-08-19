const CheckSizes = (req, res, next) => {
    const validSIzes = ['small', 'medium', 'large'];

    if (!validSIzes.includes(req.body.sizes)) {
        return res.status(422).json({
            data: null,
            error: 'Invlid size, use small, medium or large'
        })
    }

    next()
}

module.exports = {
    CheckSizes
}