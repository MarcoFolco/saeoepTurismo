var pool = require('./bd');

async function getPages() {
    var query = "select * from pages order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function inserPages(obj) {
    try {
        var query = "insert into pages set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deletePages(id) {
    try {
        var query = "delete from pages where id = ? ";
        var rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getPages, inserPages, deletePages };