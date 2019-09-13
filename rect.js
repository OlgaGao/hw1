var bubbles = [];

function setup() {
  createCanvas(800, 600);



  for (var i = 0; i < 10; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(80, 30)
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(200, 400, 30);

  rectMode(CENTER)
  rect(800,600,500,800)

  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];


    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1); // remove this bubble!
      }
      fill(255, 200, 200, 200);
    } else {
      fill(255, 220, 200, 200);
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 2);
    bubble.x += random(-9, 9);
    bubble.y += random(-1, 1);
     }
}
