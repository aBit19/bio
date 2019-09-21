const {check, validationResult, sanitizeBody} = require('express-validator');


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
	console.log(errors);
	if (errors.isEmpty()) {
		var room = {
			name: req.body.room_name,
			active_minutes: req.body.active_minutes, users: [{
				name: 'user_name1', link: 'link1'
			}, {
				name: 'user_name2', link: 'link2'
			}]
		};
		res.render('room_info', {room: room});
	} else {
		res.render('index', {errors: errors.array(), title: 'Get a room.'});
	}
}];

