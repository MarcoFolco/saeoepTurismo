var express = require('express');
var router = express.Router();
var pagesModel = require('./../../models/pagesModel');

router.get('/', async function(req, res, next) {
    var pages = await pagesModel.getPages();
    res.render('admin/pages', {
        layout: 'admin/layout',
        user: req.session.username,
        pages,
    });
});

router.get('/add', (req, res, next) => {
    res.render('admin/addPage', {
        layout: 'admin/layout',
        user: req.session.username,
    });
});

router.post('/add', async (req, res, next) => {
    try {
        if (req.body.name) {
            await pagesModel.inserPages(req.body);
            res.redirect('/admin/pages');
        } else {
            res.render('admin/addPage', {
                layout: 'admin/layout',
                user: req.session.username,
                error: true,
                message: 'All the fields are required',
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/addPage', {
            layout: 'admin/layout',
            error: true,
            message: 'The page was not inserted',
            user: req.session.username,
        })
    }
});

module.exports = router;