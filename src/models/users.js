const dbPool = require('../config/database')
const dateHelper = require('../helper/date-helper')

const tabel = 'tb_users'

const getAllUsers = () => {
    const SQLQuery = `SELECT username, nama, email FROM ${tabel} WHERE active='T' AND safe_delete='F'`

    return dbPool.execute(SQLQuery)
}

const createNewUser = (body, hashedPassword) => {
    let date_now = new Date()
    let result_date = dateHelper.getDateNow(date_now)
    const SQLQuery = `INSERT INTO ${tabel}
                    (username, password, nama, email, created_at, updated_at) VALUES
                    ('${body.username}', '${hashedPassword}', '${body.nama}' ,'${body.email}', '${result_date}', '${result_date}')`

    return dbPool.execute(SQLQuery)
}

const updateDataUser = (body, hashedPassword, idUser) => {
    let date_now = new Date()
    let result_date = dateHelper.getDateNow(date_now)
    const SQLQuery = `UPDATE ${tabel}
                    SET username='${body.username}', password='${hashedPassword}', nama='${body.nama}', email='${body.email}', active='${body.active}', updated_at='${result_date}'
                    WHERE id_user='${idUser}'`

    return dbPool.execute(SQLQuery)
}

const updateSaldoUser = (saldo, idUser) => {
    const SQLQuery = `UPDATE ${tabel} SET saldo='${saldo}' WHERE id_user='${idUser}'`

    return dbPool.execute(SQLQuery)
}

const deleteUser = (idUser) => {
    let date_now = new Date()
    let result_date = dateHelper.getDateNow(date_now)
    const SQLQuery = `UPDATE ${tabel} SET updated_at='${result_date}', deleted_at='${result_date}', active='F', safe_delete='T'
                        WHERE id_user='${idUser}'`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateDataUser,
    updateSaldoUser,
    deleteUser
}