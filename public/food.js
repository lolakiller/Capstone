function Food () {
  this.vec = randomVector().mult(scl)
}

Food.prototype.x = function () {
  return this.vec.x
}

Food.prototype.y = function () {
  return this.vec.y
}

Food.prototype.draw = function () {
  fill(255, 0, 100)
  rect(this.x(), this.y(), scl, scl)
}

Food.prototype.eaten = function () {
  this.vec = randomVector().mult(scl)
}
