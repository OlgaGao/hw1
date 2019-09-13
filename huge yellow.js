var bubbles = [];
function setup() {
  createCanvas(800, 600);
  for (var i = 0; i < 10; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(300, 100)
    };
    bubbles.push(bubble);
  }
}





function draw() {
  background(255);
  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1); // remove this bubble!
      }
      fill(255, 265, 200, 275);
    } else {
      fill(255, 255, 200, 230);
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 2);
    bubble.x += random(-9, 9);
    bubble.y += random(-5, 5);
  }
}
