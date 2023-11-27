let bgColor;
let isMousePressed = false;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  bgColor = color(220, 230, 255);
}

function draw() {
  if (isMousePressed) {
    bgColor = lerpColor(bgColor, color(0, 0, 100), 0.05);
  } else {
    bgColor = lerpColor(bgColor, color(220, 230, 255), 0.05);
  }

  background(bgColor);
  translate(width / 2, height / 2);

  noFill();
  stroke(255);

  let numStrings = 20;
  let stringSpacing = width / numStrings;

  for (let i = 0; i < numStrings; i++) {
    let x = i * stringSpacing - width / 2;
    beginShape();
    for (let y = -height / 2; y <= height / 2; y += 10) {
      let h = noise(x * 0.02, (y + frameCount * 2) * 0.04) * 150 - 65;
      curveVertex(x + h, y);
    }
    endShape();
  }
}

function mousePressed() {
  isMousePressed = true;
}

function mouseReleased() {
  isMousePressed = false;
}
