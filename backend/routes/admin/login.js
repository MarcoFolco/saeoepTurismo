var express = require('express');
var router = express.Router();
var pool = require('../../models/bd');

/* GET home page. */
router.get('/', function(req, res, next) {
  pool.query("SELECT * FROM travels tr INNER JOIN pages pg ON tr.page_fk = pg.id").then(resultados => {
    console.log(resultados);
  })
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

module.exports = router;
