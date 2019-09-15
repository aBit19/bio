
exports.create_room_post = function (req, res, next) {
	var room = {name: req.body.room_name,
		active_minutes: req.body.active_minutes, users: [{
			name: 'user_name1', link: 'link1'
		}, {
			name: 'user_name2', link: 'link2'
		}]};
		res.render('room_info', {room: room});
};

