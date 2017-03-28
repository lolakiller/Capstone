const chalk = require('chalk')

module.exports = function (io) {
  // users obj to keep track of all the connected users
  var users = []
  // use socket server as an event emitter in order to listen for new connections
  io.sockets.on('connection', function (socket) {
    console.log(chalk.yellow('We have a new user: ' + socket.id))

    // Check the device type
    socket.on('check-device-type', function (device) {
      function detectDevice () {
        if (device.match(/Android/i) ||
            device.match(/webOS/i) ||
            device.match(/iPhone/i) ||
            device.match(/iPad/i) ||
            device.match(/iPod/i) ||
            device.match(/BlackBerry/i) ||
            device.match(/Windows Phone/i)
        ) {
          // if its a mobile device push it to the users array
          users.push({id: socket.id})
          var colorKey = 0;
          var colors = ["blue", "yellow", "purple", "green"]
          users.map(function(user){
            user.colorName = colors[colorKey]
            if (colorKey > 2){
              colorKey %= 2
            }
            else{
              colorKey += 1
            }
          })
          return 'mobile'
        } else {
          return 'computer'
        }
      }
      // send type to client side and use it to determine which view to render
      // user connected, eventually we want to check till we have 4 users
      // connected and then emit to the sketch so the match starts
      const deviceType = detectDevice(device)
      io.sockets.emit('send-device-type', {deviceType, users})

      io.sockets.emit('get-current-users', users)
    })

    socket.on('get-snake', function(){
      return socket.id
    })
    // update the snake position according the touch event on the mobile screen
    socket.on('user-movement-update', function (data) {
      const userId = socket.id
      // emit the snake information to the sketch and send the socketId so we know which snake to move
      io.sockets.emit('server-dir-update', {data, userId})
    })

    // event that runs anytime a socket disconnects
    socket.on('disconnect', function () {
      console.log(chalk.yellow('socket id ' + socket.id + ' has disconnected. :('))
      // If a user is disconnected, remove it from the users array by checking the socket that's getting disconnected
      users.filter(socket => socket !== socket.id)
    })
  })
}

 /*
  ROOMS: this may work for the rooms of the game, so the players wait for all the people to join the room
  */

  // var drawHistory = {};

  // io.on('connection', function (socket) {

  //     // scope issues
  //     var room = null;

  //     // listens to 37 emit
  //     socket.on('wantToJoinRoomPlox', function (roomName) {
  //         room = roomName;
  //         socket.join(roomName);

  //         if (!drawHistory[roomName]) {
  //             drawHistory[roomName] = [];
  //         }

  //         // console.log('drawhistory: ', drawHistory)
  //         socket.emit('drawHistory', drawHistory[roomName]);
  //     });

  //     socket.on('newDraw', function (start, end, color) {
  //         // data
  //         console.log('new draw', start, end, color)
  //         drawHistory[room].push({ start: start, end: end, color: color });
  //         socket.broadcast.to(room).emit('someoneElseDrew', start, end, color);
  //     });

  // });
