const dbPool = require('../config/database')
const dateHelper = require('../helper/date-helper')

const tabel = 'tb_users'

const getAllUsers = () => {
    const SQLQuery = `SELECT * FROM ${tabel}`

    return dbPool.execute(SQLQuery)
}

const createNewUser = async (body, hashedPassword) => {
    let date_now = new Date()
    let result_date = dateHelper.getDateNow(date_now)
    const SQLQuery = `INSERT INTO ${tabel}
                    (username, password, nama, email, created_at, updated_at) VALUES
                    ('${body.username}', '${hashedPassword}', '${body.nama}' ,'${body.email}', '${result_date}', '${result_date}')`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllUsers,
    createNewUser
}