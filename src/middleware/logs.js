const logRequest = (req, res, next) => {
    const reqInfo = req.method + ' ' + req.path
    console.log('Terjadi Request ke PATH', reqInfo)
    next()
}

module.exports = logRequest