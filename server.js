var PORT = process.env.PORT || 3000;
var moment = require('moment');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
	console.log('User connected via socket.io');

	socket.on('message', function(message){
		console.log('Message Recived: ' + message.text);

		//io.emit //for every one
		//socket.broadcast.emit('message', message) //send to every body not to sendor

		message.timestamp = moment().valueOf();
		io.emit('message', message) //send to every body not to sendor
	});

	socket.emit('message', {
		name:'System',
		text:'Welcome to chat application',
		timestamp:moment().valueOf()
	})
});

http.listen(PORT, function (){
	console.log('server started');
});