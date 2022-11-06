var pool = require('./bd');

async function getEnterprises() {
    var query = "select * from enterprises order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function inserentErprises(obj) {
    try {
        var query = "insert into enterprises set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteEnterprises(id) {
    try {
        var query = "delete from enterprises where id = ? ";
        var rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getEnterprises, inserentErprises, deleteEnterprises };