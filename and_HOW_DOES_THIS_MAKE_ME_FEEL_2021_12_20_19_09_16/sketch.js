
t = 0.0;
let fart;
let art;

function setup() {
  pixelDensity();
  createCanvas(windowWidth * 0.99, windowHeight * 0.99);
  background(0);
  art = createGraphics(windowWidth / 2, windowHeight / 2);
  fart = createGraphics(windowWidth * 0.8, windowHeight * 0.8);
}
function draw() {
  colorMode(RGB);
  blendMode(SCREEN);
  strokeWeight(0.01);
  stroke(0);
  t += 0.003;
  //drawingContext.filter = "drop-shadow(6 8 9Q#0400)";
  //drawingContext.setLineDash([1, 50, 1]);
  //translate(100, 200)
  //shearY(10)
  //shearX(280)
  for (i = 3; i; i--) {
    beginShape();
    for (r = -1; r < TAU; r += 0.9)
      art.curveVertex(
        sin(r * 1) ^
          ((D =
            -noise(cos(r - 5), i - 99.9, t*2) * i * 25 * sin(r / 3) * 10 + 5) +
            560),
        cos(r + 9) * -D + 60
      );
    let arr = 355 * noise(t * 3);
    let g = 355 * noise(t * 4);
    let b = 355 * noise(t * 1.6);
    let z = 4 * noise(t + 420);
    fill(arr, g, b, z);
    //t = t + 0.0001;
    fart.curveVertex(
      cos(r - 4) *
        ((((D = sin(r * 9)), i + 9.99, t) / 2) * i * 30 * -cos(r + 6) * 12 +
          5 -
          20),
      -sin(r * 8) * -D + 820
    );
    endShape(CLOSE);

    if (frameCount % 1000 == 0) {
      background(0);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
