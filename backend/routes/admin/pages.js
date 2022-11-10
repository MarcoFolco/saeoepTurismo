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

router.get('/delete/:id', async (req, res, next) => {
    var id = req.params.id;
    await pagesModel.deletePageById(id);
    res.redirect('/admin/pages');
});

router.get('/edit/:id', async (req, res, next) => {
    let id = req.params.id;
    let page = await pagesModel.getPageById(id);
    res.render('admin/editPage', {
        layout: 'admin/layout',
        page: page[0],
        user: req.session.username,
    });
});

router.post('/edit', async (req, res, next) => {
    try {
        let obj = {
            name: req.body.name,
        };
        await pagesModel.editPageById(obj, req.body.id);
        res.redirect('/admin/pages');
    } catch (error) {
        console.log(error);
        res.render('admin/editPage', {
            layout: 'admin/layout',
            error: true,
            message: 'The page was not edited',
            user: req.session.username,
        });
    }
});

module.exports = router;