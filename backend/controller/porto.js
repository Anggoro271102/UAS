const db = require('../db/connect');

exports.getData = async () => {
    const getData = await db.query('SELECT * FROM porto');
    return {message: 'all data', data: getData}
}

exports.addData = async (data, res) => {
    const addData = await db.query('INSERT INTO porto set ?',[data])

    if(!addData.affectedRows) return "gagal"
    return {Status: 'Berhasil', data: data}
}