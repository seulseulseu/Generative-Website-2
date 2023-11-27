let angle = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(132, 48, 217);
  
  for(let i = 50; i < width-45; i += 50){
    for(let j = 50; j < height-45; j += 50){
    
      push();
      stroke(242, 51, 34);
      strokeWeight(3);
      ellipse(i, j, 25, 25);
      pop();
      
      push();
      translate(i, j);
      rotate(HALF_PI + i - angle * 3);
      stroke(238, 5, 242);
      strokeWeight(3);
      noFill();
      arc(0, 0, 30, 30, 0, PI);
      pop();
      
      push();
      translate(i, j);
      rotate(QUARTER_PI * j + angle * 1.5);
      stroke(13, 242, 5);
      strokeWeight(3);
      noFill();
      arc(0, 0, 30, 30, PI, 0);
      pop();
      
      angle += 0.0005;

    }
}
}