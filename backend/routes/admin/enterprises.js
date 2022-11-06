var express = require('express');
var router = express.Router();
var enterprisesModel = require('./../../models/enterprisesModel');

router.get('/', async function(req, res, next) {
    var enterprises = await enterprisesModel.getEnterprises();
    res.render('admin/enterprises', {
        layout: 'admin/layout',
        user: req.session.username,
        enterprises,
    });
});

router.get('/add', (req, res, next) => {
    res.render('admin/addEnterprise', {
        layout: 'admin/layout',
        user: req.session.username,
    });
});

router.post('/add', async (req, res, next) => {
    try {
        if (req.body.name) {
            await enterprisesModel.inserentErprises(req.body);
            res.redirect('/admin/enterprises');
        } else {
            res.render('admin/addEnterprise', {
                layout: 'admin/layout',
                user: req.session.username,
                error: true,
                message: 'All the fields are required',
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/addEnterprise', {
            layout: 'admin/layout',
            error: true,
            message: 'The enterprise was not inserted',
            user: req.session.username,
        })
    }
});

module.exports = router;