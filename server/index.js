let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

var clients = [];
var cant=0;
io.on('connection', (socket) => {


  console.log('user connected' );
   socket.on('disconnect', function(){
    io.emit('users-changed', {user: socket.nickname, event: 'disconnect'});

     clients.splice(clients.indexOf(socket.nickname), 1);
  });



  socket.on('set-nickname', (idusu,nickname,photo,notification) => {
    socket.nickname = nickname;

    io.emit('users-changed', {id:idusu,user: nickname,photo:photo,  event: 'connect',evets:notification});

       console.log(socket.nickname ,clients,cant);

});


  socket.on('disconnect', function(){
    console.log('user disconnected');
    cant--;

  });


});


var port = process.env.PORT || 3001;

http.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});
