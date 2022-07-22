// 🕓 🌚 😏
// What's done is done. — from Macbeth
// Lowest common denominator

let angle1 = 0.7 * Math.PI
let startX1 = 360;
let startY1 = 161;
let endX1 = 250;
let endY1 = 250;
let endX2 = 350;
let endY2 = startY1 * 2 + 20;
let myFont;

function setup() {
  createCanvas(600, 600);
  frameRate(100);
  colorMode(RGB)
  background(0, 1, 101);
  strokeWeight(35);
  stroke(100, 200);
  line(startX1, startY1, endX1, endY1);
  line(endX1, endY1, endX2, endY2);
  image(moonBackground, 350, 50, 223, 223);
  image(smirkFace, 328, 28, 269, 269);
  image(watch, endX2 - 58, endY2 - 58, 40, 40);

  // Text
  noStroke();
  fill(255, 255, 255);
  textFont(myFont);
  textSize(88);
  text("What's done is done.", 5, 570)
}

function preload() {
  myFont = loadFont("Ballet-Regular-VariableFont_opsz.ttf")
  moonBackground = loadImage('new-moon.png');
  smirkFace = loadImage('smirk-face.png');
  watch = loadImage('four-oclock.png')
}


function draw() {
  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);
}