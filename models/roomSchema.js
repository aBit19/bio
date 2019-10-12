"use strict";
var client = require('./redis_client');

function withNewId(callback) {
	client.incr("room::id", callback);
}

exports.create_room = function (roomName, minutes) {
	withNewId(function (err, roomId) {
		let key = 'room:' + roomId;
		console.log("Key: " + key);
		client.hset(key, "name", roomName);
	});
};

exports.get_room = function (roomName, callback) {
	client.get(roomName, callback);
};

exports.get_messages = function (roomId, callback) {
	client.get(roomId, callback);
};
