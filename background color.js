

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


