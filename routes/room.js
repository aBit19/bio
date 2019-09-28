var express = require('express');
var roomCtrl = require('../controllers/room');
var router = express.Router();

router.post('/create', roomCtrl.create_room_post);

router.get('/create', function (req, res, next) {
	res.redirect('/');
});

router.get('/join/:roomId', roomCtrl.get_room_content);

module.exports = router;

