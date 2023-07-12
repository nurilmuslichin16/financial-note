const dbPool = require('../config/database')
const dateHelper = require('../helper/date-helper')

const tabel = 'tb_kategori'

const getAllKategori = () => {
    const SQLQuery = `SELECT nama, jenis, warna, icon, created_at FROM ${tabel} WHERE safe_delete='F'`

    return dbPool.execute(SQLQuery)
}

const createNewKategori = (body) => {
    let date_now = new Date()
    let result_date = dateHelper.getDateNow(date_now)
    const SQLQuery = `INSERT INTO ${tabel}
                    (nama, jenis, warna, icon, created_at, updated_at) VALUES
                    ('${body.nama}', '${body.jenis}', '${body.warna}', '${body.icon}', '${result_date}', '${result_date}')`

    return dbPool.execute(SQLQuery)
}

const createNewKategoriByUser = (body) => {
    let date_now = new Date()
    let result_date = dateHelper.getDateNow(date_now)
    const SQLQuery = `INSERT INTO ${tabel}
                    (nama, jenis, warna, icon, by_user, created_at, updated_at) VALUES
                    ('${body.nama}', '${body.jenis}', '${body.warna}', '${body.icon}', '${body.by_user}', '${result_date}', '${result_date}')`

    return dbPool.execute(SQLQuery)
}

const updateDataKategori = (body, idKategori) => {
    let date_now = new Date()
    let result_date = dateHelper.getDateNow(date_now)
    const SQLQuery = `UPDATE ${tabel}
                    SET nama='${body.nama}', jenis='${body.jenis}', warna='${body.warna}', icon='${body.icon}', updated_at='${result_date}'
                    WHERE id_kategori='${idKategori}'`

    return dbPool.execute(SQLQuery)
}

const deleteKategori = (idKategori) => {
    let date_now = new Date()
    let result_date = dateHelper.getDateNow(date_now)
    const SQLQuery = `UPDATE ${tabel} SET updated_at='${result_date}', deleted_at='${result_date}', safe_delete='T'
                        WHERE id_kategori='${idKategori}'`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllKategori,
    createNewKategori,
    createNewKategoriByUser,
    updateDataKategori,
    deleteKategori
}