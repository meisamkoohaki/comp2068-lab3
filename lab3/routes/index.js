'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express-Index' });
});

router.get('/meisam', function (req, res) {
    res.render('meisam', { title: 'Express-Me' });
});

router.get('/mojy', function (req, res) {
    res.render('mojy', { title: 'Express-Syster' });
});

router.get('/mansour', function (req, res) {
    res.render('mansour', { title: 'Express-Brother' });
});

router.get('/mahin', function (req, res) {
    res.render('mahin', { title: 'Express-Father' });
});

router.get('/mohammad', function (req, res) {
    res.render('mohammad', { title: 'Express-Father' });
});
module.exports = router;
