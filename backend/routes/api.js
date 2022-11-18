var express = require('express');
var router = express.Router();
var travelsModel = require('./../models/travelsModel');
var discountsModel = require('./../models/discountsModel');
var pagesModel = require('./../models/pagesModel');
var enterprisesModel = require('./../models/enterprisesModel');
var cloudinary = require('cloudinary').v2;

router.get('/travels', async (req, res, next) => {
    let travels = await travelsModel.getTravels();

    travels = travels.map(travel => {
        if (travel.img_id) {
            const img = cloudinary.url(travel.img_id, {
                width: 960,
                height: 700,
                crop: 'fill',
            });
            return {
                ...travel,
                img,
            };
        } else {
            return {
                ...travel,
                img: '',
            }
        }
    });

    res.json(travels);
});

router.get('/discounts', async (req, res, next) => {
    let discounts = await discountsModel.getDiscounts();

    res.json(discounts);
});

router.get('/pages', async (req, res, next) => {
    let pages = await pagesModel.getPages();

    res.json(pages);
});

router.get('/enterprises', async (req, res, next) => {
    let enterprises = await enterprisesModel.getEnterprises();

    res.json(enterprises);
});

module.exports = router;