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

async function deletePageById(id) {
    try {
        var query = "delete from pages where id = ? ";
        var rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function getPageById(id) {
    try {
        var query = "select * from pages where id = ?";
        var rows = await pool.query(query, [id]);
        return rows ? rows[0] : null;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function editPageById(obj, id) {
    try {
        var query = "update pages set ? where id = ?";
        var rows = await pool.query(query, [obj,id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }

}

module.exports = { getPages, inserPages, deletePageById, getPageById, editPageById };