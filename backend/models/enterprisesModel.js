var pool = require('./bd');

async function getEnterprises() {
    var query = "select * from enterprises order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function insertEnterprises(obj) {
    try {
        var query = "insert into enterprises set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteEnterpriseById(id) {
    try {
        var query = "delete from enterprises where id = ? ";
        var rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getEnterpriseById(id) {
    try {
        var query = "select * from enterprises where id = ?";
        var rows = await pool.query(query, [id]);
        return rows ? rows[0] : null;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function editEnterpriseById(obj, id) {
    try {
        var query = "update enterprises set ? where id = ?";
        var rows = await pool.query(query, [obj,id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }

}

module.exports = { getEnterprises, insertEnterprises, deleteEnterpriseById, getEnterpriseById, editEnterpriseById };