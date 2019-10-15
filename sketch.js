var mySong;
var myImage;
var analyzer;
var secondImage;


function preload(){
mySong = loadSound("./sounds/1.mp3");
myImage = loadImage("./images/604.jpg");
secondImage = loadImage("./images/486.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255,0,0);
  mySong.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
}

function draw() {
  imageMode(CENTER);
  image(myImage, width/2, height/2, myImage.width/4, myImage.height/4);
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height/5);
  imageMode(CENTER);
  image(secondImage, width/2, height/2, secondImage.width/(volume/4), secondImage.height/(volume/4));
  mySong.play();
}
