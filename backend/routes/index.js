var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.username) {
    res.redirect('/admin/news');
  } else {
    res.redirect('/admin/login');
  }
});

module.exports = router;
