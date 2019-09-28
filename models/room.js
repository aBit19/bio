var client = require('./redis_client');


exports.create_room = function (roomName, minutes) {
	console.log(client.id);
	client.set(roomName, minutes);
};

exports.get_room = function (roomName, callback) {
	client.get(roomName, callback);
};

exports.get_messages = function (roomId, callback) {
	client.get(roomId, callback);
};
