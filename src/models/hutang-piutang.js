const dbPool = require('../config/database')
const dateHelper = require('../helper/date-helper')

const tabel = 'tb_hutang_piutang'

const getAllHutang = (idUser) => {
    const SQLQuery = `SELECT nama_orang, nominal, keterangan, tanggal, status, created_at FROM ${tabel} WHERE jenis='HUTANG' AND safe_delete='F' AND id_user='${idUser}'`

    return dbPool.execute(SQLQuery)
}

const getAllPiutang = (idUser) => {
    const SQLQuery = `SELECT nama_orang, nominal, keterangan, tanggal, status, created_at FROM ${tabel} WHERE jenis='PIUTANG' AND safe_delete='F' AND id_user='${idUser}'`

    return dbPool.execute(SQLQuery)
}

const createNewHutang = (body) => {
    let date_now = new Date()
    let result_date = dateHelper.getDateNow(date_now)
    const SQLQuery = `INSERT INTO ${tabel}
                    (id_user, nama_orang, jenis, nominal, keterangan, tanggal, status, created_at, updated_at) VALUES
                    ('${body.id_user}', '${body.nama_orang}', 'HUTANG', '${body.nominal}', '${body.keterangan}', '${body.tanggal}', 'BELUM LUNAS', '${result_date}', '${result_date}')`

    return dbPool.execute(SQLQuery)
}

const createNewPiutang = (body) => {
    let date_now = new Date()
    let result_date = dateHelper.getDateNow(date_now)
    const SQLQuery = `INSERT INTO ${tabel}
                    (id_user, nama_orang, jenis, nominal, keterangan, tanggal, status, created_at, updated_at) VALUES
                    ('${body.id_user}', '${body.nama_orang}', 'PIUTANG', '${body.nominal}', '${body.keterangan}', '${body.tanggal}', 'BELUM LUNAS', '${result_date}', '${result_date}')`

    return dbPool.execute(SQLQuery)
}

const updateHutangPiutang = (body, idHutangPiutang) => {
    let date_now = new Date()
    let result_date = dateHelper.getDateNow(date_now)
    const SQLQuery = `UPDATE ${tabel}
                    SET nama_orang='${body.nama_orang}', nominal='${body.nominal}', keterangan='${body.keterangan}', tanggal='${body.tanggal}', status='${body.status}', updated_at='${result_date}'
                    WHERE id_hutang_piutang='${idHutangPiutang}'`

    return dbPool.execute(SQLQuery)
}

const deleteHutangPiutang = (idHutangPiutang) => {
    let date_now = new Date()
    let result_date = dateHelper.getDateNow(date_now)
    const SQLQuery = `UPDATE ${tabel} SET updated_at='${result_date}', deleted_at='${result_date}', safe_delete='T'
                        WHERE id_hutang_piutang='${idHutangPiutang}'`

    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllHutang,
    getAllPiutang,
    createNewHutang,
    createNewPiutang,
    updateHutangPiutang,
    deleteHutangPiutang
}