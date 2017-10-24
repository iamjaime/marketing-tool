let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('user connected' );
   socket.on('disconnect', function(){
    io.emit('users-changed', {user: socket.nickname, event: 'left'});   
  });
 
  socket.on('set-nickname', (nickname) => {
    socket.nickname = nickname;
    io.emit('users-changed', {user: nickname, event: 'joined'});    
console.log(socket.nickname );	
  });
  
  socket.on('add-message', (message) => {
    io.emit('message', {text: message.text, from: socket.nickname, created: new Date()});    
  });
    socket.on('new_message', (message) => {
            //socket.emit('new_message',message);
            io.emit('new_message',message);
            console.log( 'se unio '+message);
        });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
 
});


var port = process.env.PORT || 3001;
 
http.listen(port, function(){
   console.log('listening in http://192.168.1.72:' + port);
});