var express = require('express');
var router = express.Router();
var travelsModel = require('./../../models/travelsModel');

router.get('/', async function(req, res, next) {
    var travels = await travelsModel.getTravels();
    res.render('admin/travels', {
        layout: 'admin/layout',
        user: req.session.username,
        travels,
    });
});

router.get('/add', (req, res, next) => {
    res.render('admin/add', {
        layout: 'admin/layout',
        user: req.session.username,
    });
});

router.post('/add', async (req, res, next) => {
    try {
        if (req.body.title && req.body.img_name && req.body.page_fk && req.body.dates && req.body.assets && req.body.hotel && req.body.price) {
            await travelsModel.insertTravel(req.body);
            res.redirect('/admin/travels');
        } else {
            res.render('admin/add', {
                layout: 'admin/layout',
                user: req.session.username,
                error: true,
                message: 'All the fields are required',
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/add', {
            layout: 'admin/layout',
            error: true,
            message: 'The travel was not inserted',
            user: req.session.username,
        })
    }
});

module.exports = router;