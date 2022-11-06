var express = require('express');
var router = express.Router();
var pool = require('../../models/bd');
var usersModel = require('./../../models/usersModel');

/* POST Login page */
router.post('/', async (req, res, next) => {
  try {
    var user = req.body.user;
    var password = req.body.password;

    var data = await usersModel.getUserByUsernameAndPassword(user, password);
    if (data != undefined) {
      req.session.user_id = data.id;
      req.session.username = data.username;
      res.redirect('/admin/travels');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
})

/* GET login page. */
router.get('/', (req, res, next) => {
  res.render('admin/login', {
    layout: 'admin/layout',
  });
});

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/admin/login');
})

module.exports = router;
