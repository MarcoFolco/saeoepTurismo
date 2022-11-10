var pool = require('./bd');

async function getDiscounts() {
    var query = "select * from discounts order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function insertDiscount(obj) {
    try {
        var query = "insert into discounts set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteDiscountById(id) {
    try {
        var query = "delete from discounts where id = ? ";
        var rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getDiscountById(id) {
    try {
        var query = "select * from discounts where id = ?";
        var rows = await pool.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function editDiscountById(obj, id) {
    try {
        var query = "update discounts set ? where id = ?";
        var rows = await pool.query(query, [obj,id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }

}

module.exports = { getDiscounts, insertDiscount, deleteDiscountById, getDiscountById, editDiscountById };