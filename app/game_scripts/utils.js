

export const scl = 20


export const utils = {
  cols: function (p) {
    return Math.floor(p.width / scl)
  },

  rows: function (p) {
    return Math.floor(p.height / scl)
  },

  randomVector: function (p) {
    return p.createVector(p.floor(p.random(this.cols(p))), p.floor(p.random(this.rows(p))))


  }
}
