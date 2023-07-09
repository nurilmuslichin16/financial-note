const getDateNow = (dateNow) => {
    let date = ("0" + dateNow.getDate()).slice(-2)
    let month = ("0" + (dateNow.getMonth() + 1)).slice(-2)
    let year = dateNow.getFullYear()
    let hours = dateNow.getHours()
    let minutes = dateNow.getMinutes()
    let seconds = dateNow.getSeconds()
    let date_result = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
    return date_result
}

module.exports = {
    getDateNow
}