var express = require('express');
var router = express.Router();
var travelsModel = require('./../models/travelsModel');
var discountsModel = require('./../models/discountsModel');
var pagesModel = require('./../models/pagesModel');
var enterprisesModel = require('./../models/enterprisesModel');
var cloudinary = require('cloudinary').v2;

router.get('/travels', async (req, res, next) => {
    let travels = await travelsModel.getTravels();
    let pages = await pagesModel.getPages();
    travels = travels.map(travel => {
        let page = pages.filter(page => page.id === travel.page_fk)[0];
        if (page) travel.page_name = page.name;
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
    let enterprises = await enterprisesModel.getEnterprises();
    discounts = discounts.map(discount => {
        let enterprise = enterprises.filter(enterprise => enterprise.id == discount.enterprise_fk)[0];
        discount.enterprise_name = enterprise.name;
        return discount;
    })
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