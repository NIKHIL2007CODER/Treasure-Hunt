var bg,bg2,form,system,code,security;
var score=0;
var aladdin , aladdinIMG;
function preload() {
  bg = loadImage("cave.png");
  aladdinIMG = loadImage("Aladdin.png");
  bg2 = loadImage("treasure.jpg");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  system = new System()
  security = new Security();

  aladdin = createSprite(width-150 , height-250 , 10 , 10);
  aladdin.addImage("aladdin" , aladdinIMG);
  aladdin.scale = 0.5 ;
}

function draw() {
  background(bg);
  clues();
  security.display();


  textSize(40);
  fill(0,255,255);
  stroke(255,0,255);
  strokeWeight(5);
  textFont("harrington")
  text("SCORE : " +  score , width/2 , 70);

  // Add code to display score in the middle of the screen


  // Add code to display the end screen

  if(score === 3){
    clear();
    background(bg2);
    textSize(90);
    textFont("harrington");
    fill(255,0,0);
    stroke("cyan");
    strokeWeight(7);
    text("TREASURE UNLOCKED !" , width/11 , height/2);

  }

  drawSprites()
}