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
    res.render('admin/addTravel', {
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
            res.render('admin/addTravel', {
                layout: 'admin/layout',
                user: req.session.username,
                error: true,
                message: 'All the fields are required',
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/addTravel', {
            layout: 'admin/layout',
            error: true,
            message: 'The travel was not inserted',
            user: req.session.username,
        })
    }
});

router.get('/delete/:id', async (req, res, next) => {
    var id = req.params.id;
    await travelsModel.deleteTravelById(id);
    res.redirect('/admin/travels');
});

router.get('/edit/:id', async (req, res, next) => {
    let id = req.params.id;
    let travel = await travelsModel.getTravelById(id);
    res.render('admin/editTravel', {
        layout: 'admin/layout',
        travel: travel[0],
        user: req.session.username,
    });
});

router.post('/edit', async (req, res, next) => {
    try {
        let obj = {
            title: req.body.title,
            img_name: req.body.img_name,
            page_fk: req.body.page_fk,
            dates: req.body.dates,
            assets: req.body.assets,
            extras: req.body.extras,
            hotel: req.body.hotel,
            price: req.body.price,
        };
        await travelsModel.editTravelById(obj, req.body.id);
        res.redirect('/admin/travels');
    } catch (error) {
        console.log(error);
        res.render('admin/editTravel', {
            layout: 'admin/layout',
            error: true,
            message: 'The travel was not edited',
            user: req.session.username,
        });
    }
});

module.exports = router;