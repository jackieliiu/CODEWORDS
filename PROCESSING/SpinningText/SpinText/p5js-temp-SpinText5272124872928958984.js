function preload() {
  //Ensure  the .ttf or .otf font stored in directory
  //s loaded before setup and draw
  font=loadFont('data/ManifontGroteskBook-webfont.otf');
  font2=loadFont('data/AileronRegular.ttf');
  font3=loadFont('data/GTSectraBookItalic.ttf');
  //can't have font names with spaces in it
}
var spin=0; // variable to rotate
var letterSize=24; // variable for text size

function setup() {
  createCanvas(600,600);
  background (0,0,200);
  fill(255);
  angleMode(DEGREES);
  //textFont (font,72); // font and pixel size
  textAlign(CENTER);
  frameRate(15);
}


function draw() {
  fill(255);
  translate(300,300);
  rotate(spin);
  textFont(font,60);
  text('TOPSY TURVY',0,0);
  spin+=map(mouseX,0,600,-10,10); // mouse X affects spin direction and speed
  letterSize=map(mouseY,0,600,8,72);
 // print(spin);

  rotate(0);
  noStroke();
  fill(0,0,200,30);// (RGB,alpha value) writing over layers
  translate(0,0);
  rect(0,0,600,600);
  
}

function mousePressed() {

}
