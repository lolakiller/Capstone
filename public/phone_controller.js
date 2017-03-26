// var socket = io.connect('http://192.168.2.140:1337')
// var device
// // device =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
// device = window.navigator.userAgent

// socket.emit('mobile-device', device)

// socket.on('activate-device-controls', function (isPhone) {

//   if (isPhone) {
//     var snake_position = {
//         x: 0,
//         y: 0
//       },
//       emit_updates = function () {
//         socket.emit('snake_position_change', snake_position)
//       }
//     touchstart = function (e) {
//       // console.log('THIS IS E', e)
//       e.preventDefault()
//       if (e) {
//           snake_position.event = touchStarted()
//         }
//       emit_updates()
//     },
//         touchend = function (e) {
//           e.preventDefault()
//           snake_position.event = e
//           emit_updates()
//         },
//         devicemotion = function (e) {
//           snake_position.event = e
//           emit_updates()
//         }
//     document.body.addEventListener('touchstart', touchstart, false) // iOS & Android
//     document.body.addEventListener('MSPointerDown', touchstart, false) // Windows Phone
//     document.body.addEventListener('touchend', touchend, false) // iOS & Android
//     document.body.addEventListener('MSPointerUp', touchend, false) // Windows Phone
//     window.addEventListener('devicemotion', devicemotion, false)
//   } else {
//         // Failed connection
//     console.log("Not a phone!")
//   }
// })
>>>>>>> origin/projector
