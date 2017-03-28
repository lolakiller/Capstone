import { scl, utils } from './utils'
import { updateSnakePoints } from '../reducers/snakes'
import store from '../store'

export default function Snake (p, user, colorName) {
  const vector = utils.randomVector(p).mult(scl)
  this.x = vector.x
  this.y = vector.y
  this.id = user
  this.xspeed = -1
  this.yspeed = 0
  this.tail = []
  this.points = 0
  this.name = colorName
  this.color = colors[colorName]
  this.visible = true
}

Snake.prototype.dir = function (x, y) {
  if ((x !== 0 && this.xspeed !== x * (-1)) || (y !== 0 && this.yspeed !== y * (-1))) {
    this.xspeed = x
    this.yspeed = y
  }
}

Snake.prototype.eat = function (p, food) {
  if (this.x === food.x() && this.y === food.y()) {
    food.eaten(p)
    this.points++
    this.tail.push({x: this.x, y: this.y})
    store.dispatch(updateSnakePoints(this))
  }
}

Snake.prototype.collide = function (snake2) {
  if (this.x === snake2.x && this.y === snake2.y) {
    this.visible = false
  } else {
    for (let i = 0; i < this.tail.length; i++) {
      if (this.tail[i].x === snake2.x && this.tail[i].y === snake2.y) {
        snake2.visible = false
      }
    }
  }
}

Snake.prototype.move = function (p) {
    // put last square of tail in front of the line
  if (this.tail.length > 0) {
    var tipOfTail = this.tail.pop()
    tipOfTail.x = this.x
    tipOfTail.y = this.y
    this.tail.unshift(tipOfTail)
  }

    // move head
  this.x += this.xspeed * scl
  this.y += this.yspeed * scl

    // wrap around right and bottom edges
  this.x %= p.width
  this.y %= p.height

    // wrap around left and top edges
  if (this.x < 0) {
    this.x = p.width - scl
  }
  if (this.y < 0) {
    this.y = p.height - scl
  }
}

Snake.prototype.draw = function (p) {
  if (this.visible) {
    p.fill(p.color(this.color))
    p.rect(this.x, this.y, scl, scl)
    for (var i = 0; i < this.tail.length; i++) {
      p.rect(this.tail[i].x, this.tail[i].y, scl, scl)
    }
  }
}
