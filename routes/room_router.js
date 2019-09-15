var express = require('express');
var room = require('../controllers/roomController')
var router = express.Router();

router.post('/create', room.create_room_post);

router.get('/create', function (req, res, next) {
	res.redirect('/');
});

module.exports = router;

