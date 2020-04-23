var ship;
const socket = io.connect('http://localhost:8080');

function setup() {
  var cnv = createCanvas(1600, 992);
  player = new Player()
  world = []
  for (var i = 0; i<30; i+=1) {
    if (i < 10) {
    world[i] = "0".repeat(50)
  } else if (i < 20) {
    world[i] = "1".repeat(50)
  } else {
    world[i] = "2".repeat(50)
  }
  }
  socket.emit("data",
  {
    id: prompt("Data ID?", "")
  });
}

function draw() {
  background(0, 0, 0);

  noStroke();

  world.forEach(mapGen)

  fill(255, 100);
  player.show();
}

function mapGen(item, index) {
  var xx = 0
  for (var i = 0; i < item.length; i++) {
    var col = block(item.charAt(i));
    if (item.charAt(i) != "0") {
      fill(col, 100)
      square(xx, index*32, 32)
    }

    xx+=32
  }
}

function block(block) {
  if (block == "0") {
    return 0
  }
  if (block == "1") {
    return 200
  }
  if (block == "2") {
    return 100
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    player.right()
  }
  if (keyCode == LEFT_ARROW) {
    player.left()
  }
}
