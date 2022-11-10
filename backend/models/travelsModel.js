var pool = require('./bd');

async function getTravels() {
    var query = "select * from travels order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function insertTravel(obj) {
    try {
        var query = "insert into travels set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteTravelById(id) {
    try {
        var query = "delete from travels where id = ? ";
        var rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getTravelById(id) {
    try {
        var query = "select * from travels where id = ?";
        var rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function editTravelById(obj, id) {
    try {
        var query = "update travels set ? where id = ?";
        var rows = await pool.query(query, [obj,id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }

}

module.exports = { getTravels, insertTravel, deleteTravelById, getTravelById, editTravelById };