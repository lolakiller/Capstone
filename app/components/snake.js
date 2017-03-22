export default function Snake(p, scl) {
  this.x = p.cols()/2 * scl;
  this.y = p.rows()/2 * scl;
  this.xspeed = -1;
  this.yspeed = 0;
  this.tail = [];
  this.points = 0;

 this.dir = function(x, y) {
    if (x != 0 && this.xspeed != x * (-1)
        || y != 0 && this.yspeed != y * (-1)) {
      this.xspeed = x;
      this.yspeed = y;
    }
  }

 this.eat = function(food) {

   if (this.x === food.x() && this.y === food.y()) {
      food.eaten();
      this.points++;
      this.tail.push(p.createVector(this.x, this.y));
    }
  }

 this.move = function() {
    // put last square of tail in front of the line
    if (this.tail.length > 0) {
      var tipOfTail = this.tail.pop();
      tipOfTail.x = this.x;
      tipOfTail.y = this.y;
      this.tail.unshift(tipOfTail);
    }

   // move head
    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;

   // wrap around right and bottom edges
    this.x %= p.width;
    this.y %= p.height;

   // wrap around left and top edges
    if (this.x < 0) {
      this.x = p.width - scl;
    }
    if (this.y < 0) {
      this.y = p.height - scl;
    }
  }

 this.draw = function() {
    p.fill(255);
    p.rect(this.x, this.y, scl, scl);
    for(var i = 0; i < this.tail.length; i++) {
      p.rect(this.tail[i].x,
          this.tail[i].y,
          scl, scl);
    }
  }
}