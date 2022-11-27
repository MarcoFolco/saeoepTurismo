var express = require('express');
var router = express.Router();
var travelsModel = require('./../models/travelsModel');
var discountsModel = require('./../models/discountsModel');
var pagesModel = require('./../models/pagesModel');
var enterprisesModel = require('./../models/enterprisesModel');
const { Router } = require('express');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

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

router.post('/contact', async (req, res, next) => {
    try {
        const mail = {
            to: 'marcofolco28@gmail.com',
            subject: 'Message received through Saeoepturismo',
            html: `${req.body.name} has contacted you through the web site of Saeoepturismo
            to request further information. The requester's mail and cell phone are 
            ${req.body.email} and ${req.body.phone}. ${req.body.name} also made the 
            following comment: "${req.body.message}"`
        };
    
        const transport = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });
    
        await transport.sendMail(mail);
    
        res.status(201).json({
            error: false,
            message: 'Message sent',
        });
    } catch (error) {
        console.log(error)
        res.status(201).json({
            error: true,
            message: 'Failed to send the message'
        })
    }
});

module.exports = router;