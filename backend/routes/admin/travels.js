var express = require('express');
var router = express.Router();
var travelsModel = require('./../../models/travelsModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function(req, res, next) {
    var travels = await travelsModel.getTravels();

    travels = travels.map(travel => {
        if (travel.img_id) {
            const img = cloudinary.image(travel.img_id, {
                width: 100,
                height: 100,
                crop: 'fill',
            });
            return {
                ...travel,
                img
            };
        } else {
            return {
                ...travel,
                img: '',
            }
        }
    });
    res.render('admin/travels', {
        layout: 'admin/layout',
        travels,
    });
});

router.get('/add', (req, res, next) => {
    res.render('admin/addTravel', {
        layout: 'admin/layout',
    });
});

router.post('/add', async (req, res, next) => {
    try {
        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            img = req.files.img;
            img_id = (await uploader(img.tempFilePath)).public_id;
        }
        if (req.body.title && req.body.page_fk && req.body.dates && req.body.assets && req.body.hotel && req.body.price) {
            await travelsModel.insertTravel({
                ...req.body,
                img_id
            });
            res.redirect('/admin/travels');
        } else {
            res.render('admin/addTravel', {
                layout: 'admin/layout',
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
        })
    }
});

router.get('/delete/:id', async (req, res, next) => {
    var id = req.params.id;
    let travel = await travelsModel.getTravelById(id);
    if (travel.img_id) {
        await (destroy(travel.img_id));
    }
    await travelsModel.deleteTravelById(id);
    res.redirect('/admin/travels');
});

router.get('/edit/:id', async (req, res, next) => {
    let id = req.params.id;
    let travel = await travelsModel.getTravelById(id);
    res.render('admin/editTravel', {
        layout: 'admin/layout',
        travel: travel,
    });
});

router.post('/edit', async (req, res, next) => {
    try {
        let img_id = req.body.original_img;
        let delete_old_img = false;
        if (req.body.delete_img === "1") {
            img_id = null;
            delete_old_img = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                img = req.files.img;
                img_id =(await uploader(img.tempFilePath)).public_id;
                delete_old_img = true;
            }
        }
        if (delete_old_img && req.body.original_img) await (destroy(req.body.original_img));
        let obj = {
            title: req.body.title,
            img_id,
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
        });
    }
});

module.exports = router;