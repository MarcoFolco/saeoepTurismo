var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin/news', {
        layout: 'admin/layout',
        user: req.session.username,
    });
});

module.exports = router;