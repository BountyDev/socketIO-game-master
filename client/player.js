function Player() {
  this.x = 300
  this.y = 300
  this.mspd = 5

  this.show = function() {
    fill(255)
    rect(this.x, this.y, 20, 20)
  }

  this.left = function() {
    this.x-=5;
  }

  this.right = function () {
    this.x+=5;
  }
}
