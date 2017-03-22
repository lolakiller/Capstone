
var scl = 20
var snake
var food
var socket
var snakes = []

function setup () {
  createCanvas(scl * 30, scl * 30)
  // in the future this would go in the actual server
  socket = io.connect('http://localhost:1337')
  snake = new Snake()
  food = new Food()
  const data = {
    //snake: snake,
    x: snake.x,
    y: snake.y,
    color: snake.color,
    points: snake.points,
    tail: snake.tail,
    foodx: food.x,
    foody: food.y
  }
 //console.log('DATA', data)

  // send the snake info to the server
  socket.emit('start', data)
  socket.on('update', function (data) {
    //console.log('inside heartbeat this is the data!!!', data)
    snakes = data
  })

  frameRate(10)
}

function draw () {
  background(51)
  snake.eat(food)
  food.draw()
  for (var i = snakes.length - 1; i >= 0; i--) {
    var id = snakes[i].id
    //console.log('snakes inside draw', snakes)
    if (id.substring(2, id.length) !== socket.id) {
      fill(snakes[i].color)
      rect(snakes[i].x, snakes[i].y, scl, scl)
    }
  }
  snake.draw()
  snake.move()
  var data = {
    x: snake.x,
    y: snake.y,
    //tail: snake.tail,
    points: snake.points,
    color: snake.color
  }
  //console.log('Updated Snake', data)
  socket.emit('update', data)
}


function keyPressed () {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1)
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1)
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0)
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0)
  }
}

function cols () {
  return floor(width / scl)
}

function rows () {
  return floor(height / scl)
}

function randomVector () {
  return createVector(floor(random(cols())), floor(random(rows())))
}
