var express = require('express');
var router = express.Router();
var discountsModel = require('./../../models/discountsModel');

router.get('/', async function(req, res, next) {
    var discounts = await discountsModel.getDiscounts();
    res.render('admin/discounts', {
        layout: 'admin/layout',
        user: req.session.username,
        discounts,
    });
});

router.get('/add', (req, res, next) => {
    res.render('admin/addDiscount', {
        layout: 'admin/layout',
        user: req.session.username,
    });
});

router.post('/add', async (req, res, next) => {
    try {
        if (req.body.enterprise_fk && req.body.places && req.body.value) {
            await discountsModel.insertDiscount(req.body);
            res.redirect('/admin/discounts');
        } else {
            res.render('admin/addDiscount', {
                layout: 'admin/layout',
                user: req.session.username,
                error: true,
                message: 'All the fields are required',
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/addDiscount', {
            layout: 'admin/layout',
            error: true,
            message: 'The discount was not inserted',
            user: req.session.username,
        })
    }
});

module.exports = router;