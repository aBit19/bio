const {check, validationResult, sanitizeBody} = require('express-validator');
let roomPersistence = require('../models/room');

exports.create_room_post = [
	check('room_name')
		.isAlphanumeric()
		.withMessage('Room name should contain alpha numeric characters')
		.isLength({min: 1}),

	check('active_minutes')
		.isNumeric()
		.withMessage('Provide active minutes.')
		.isLength({min: 1}),

	check('num_of_users')
		.isNumeric()
		.withMessage('Num of users should be a number.')
		.isLength({min: 1}),
	sanitizeBody('room_name').escape(),
	function (req, res, next) {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		roomPersistence.create_room(req.body.room_name, req.body.active_minutes);
		var room = {
			name: req.body.room_name,
			active_minutes: req.body.active_minutes,
			users: [{
				name: 'user_name1', link: 'http://localhost:3000/room/join/' + req.body.room_name}, {
				name: 'user_name2', link: 'http://localhost:3000/room/join/1234'}]
		};
		res.render('room_info', {room: room});
	} else {
		res.render('index', {errors: errors.array(), title: 'Get a room.'});
	}
}];

exports.get_room_content = function (req, res, next) {
	let roomId = req.params.roomId;
	roomPersistence.get_messages(roomId, function (err, reply) {
		res.send(reply);
	});
};

