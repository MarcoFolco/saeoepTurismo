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

router.get('/delete/:id', async (req, res, next) => {
    var id = req.params.id;
    await discountsModel.deleteDiscountById(id);
    res.redirect('/admin/discounts');
});

router.get('/edit/:id', async (req, res, next) => {
    let id = req.params.id;
    let discount = await discountsModel.getDiscountById(id);
    res.render('admin/editDiscount', {
        layout: 'admin/layout',
        discount: discount[0],
        user: req.session.username,
    });
});

router.post('/edit', async (req, res, next) => {
    try {
        let obj = {
            enterprise_fk: req.body.enterprise_fk,
            places: req.body.places,
            value: req.body.value,
        };
        await discountsModel.editDiscountById(obj, req.body.id);
        res.redirect('/admin/discounts');
    } catch (error) {
        console.log(error);
        res.render('admin/editDiscount', {
            layout: 'admin/layout',
            error: true,
            message: 'The discount was not edited',
            user: req.session.username,
        });
    }
});

module.exports = router;