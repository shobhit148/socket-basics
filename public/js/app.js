var socket = io();
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');

console.log(name + ' wants to join ' + room);

socket.on('connect', function(){
	console.log('connected to socket.io server');
});

socket.on('message', function(message){
	var momentTimestamp = moment.utc(message.timestamp);
	var $message = jQuery('.messages');
	console.log('New message');
	console.log(message.text);

	$message.append('<p><strong>'+ message.name+ ' ' + momentTimestamp.local().format('h:mm:a') +'</strong></p>')
	//jQuery('.messages').append('<p><strong>'+momentTimestamp.local().format('h:mm:a')+' - </strong>'+message.text+ '</p>');
	$message.append('<p>'+message.text+'</p>')
});
//handle submitting a new msg
var $form = jQuery('#message-form');

$form.on('submit', function(event){
	event.preventDefault(); 

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
	  name:name,
	  text:  $message.val()
	});
	
	$message.val('');
})